class Comments {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(router, user, usersService, commentsService) {
        this.router = router;
        this.usersService = usersService;
        this.service = commentsService;
        this.user = user;
        this.maxCommentLines = 10;

        setTimeout(() => {
            this.handler.observe('type', 'typeId').onChange('typeId', typeId => {
                if (this.typeId == typeId) return;
                this.init();
            })
        }, 100);
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    async init() {
        this.isLoading = false;
        this.isEmptyComment = true;
        this.editMode = false;
        this.isRecording = false;
        this.project = this.prop('project', {});
        this.disableComments = this.prop('disableComments');
        this.type = this.prop('type');
        this.typeId = this.prop('typeId');
        this.parentComment = this.prop('parent', null);
        this.commentsList = [];

        if (!this.parentComment) {
            this.isLoading = true;
            const { records } = await this.service.list({
                type: this.type,
                typeId: this.typeId,
                parentOnly: true,
            });

            this.isLoading = false;

            this.commentsList = collect(records);
        } else {
            this.commentsList = collect(this.prop('comments', []));
        }

        this.currentRoute = this.router.route();
        this.activeCommentTreeId = this.router.queryString.get('comment');

        this.activeCommentTree = String(this.activeCommentTreeId).split('_').map(commentId => Number(commentId));

        if (this.parentComment) {
            this.commentsList = this.commentsList.sortBy('id');
        } else {
            this.commentsList = this.commentsList.sortByDesc('id');
        }

        this.commentsList = this.commentsList.toArray().map(comment => {
            comment.previewUserFromImage = false;
            comment.previewUserFromName = false;
            comment.commentsAreOpened = this.activeCommentTreeId && comment.tree == this.activeCommentTreeId || this.activeCommentTree.includes(Number(comment.id));

            if (this.activeCommentTreeId && comment.tree == this.activeCommentTreeId) {
                this.activeComment = comment;
                // echo(this.activeComment)
                this.scrollToActiveComment();
            }

            return comment;
        });

        this.isValidForm = true;
    }

    previewBy(currentElement, comment, type) {
        comment.element = currentElement;
        if (comment.previewingBy && comment.previewingBy != type) {
            comment[comment.previewingBy] = false;

        }

        comment.previewingBy = type;

        if (comment.previewingBy && comment.previewingBy == type && comment[type]) return;

        comment[type] = true;
    }

    stopPreviewingBy(e, comment, type) {
        // let currentEvent = e;
        // let currentHoveringElement = currentEvent.toElement || currentEvent.relatedTarget;

        // echo(currentEvent.target, comment.element, currentHoveringElement, comment.element.contains(currentHoveringElement))

        // if (comment.previewingBy == type) {
        //     comment.previewingBy = false;
        // }

        // comment[type] = false;
        // this.detectChanges();
        // setTimeout(() => {
        // }, 0);
    }

    scrollToActiveComment() {    
        if (! this.activeComment) return;
        setTimeout(() => {
            let commentElement = document.getElementById(`cmnt${this.activeComment.id}`);
            scrollTo(
                commentElement,
                SCROLL_TOP_OFFSET,
                500
            );

            setTimeout(() => {
                this.activeComment = null;
                // this.detectChanges();
            }, 2000);
        }, 400);
    }

    async submitComment(form) {
        if (this.recordAudio && this.recordAudio.recordData) {
            let formData = new FormData(form);
            formData.append('record', this.recordAudio.recordData);
            form = formData;
        } else if (this.editRecordAudio && this.editRecordAudio.recordData) {
            let formData = new FormData(form);
            formData.append('record', this.editRecordAudio.recordData);
            form = formData;
        }

        this.isSending = true;

        this.detectChanges();

        if (!this.comment) {
            let { record } = await this.service.create(form);

            this.newComment = null;
            this.commentsList.unshift(record);
            this.detectChanges();
            // scrollTop();
            setTimeout(() => {
                let commentElement = document.getElementById('cmnt' + record.id);

                scrollTo(commentElement, 80, 500);
            }, 10);
        } else {
            let { record } = await this.service.update(this.comment.id, form);

            this.commentsList[this.index] = record;
        }

        if (Is.array(this.fileInput)) {
            for (let input of this.fileInput) {
                input.reset();
            }
        } else {
            this.fileInput.reset();
        }

        Comments.writeComment = false;

        this.isSending = false;
        this.comment = null;
        this.editMode = null;
    }

    confirmRemoving(comment, index) {
        this.comment = comment;
        this.index = index;
        this.confirmDelete = true;
    }

    cancelRemoving() {
        this.comment = null;
        this.index = null;
        this.confirmDelete = null;
    }

    toggleParentComments() {
        if (!this.parentComment) return;

        this.parentComment.commentsAreOpened = false;

        this.detectChanges();
    }

    toggleSubComment(comment) {
        comment.commentsAreOpened = !comment.commentsAreOpened;

        if (comment.commentsAreOpened == false) {
            Comments.writeComment = false;
        }

        this.detectChanges();
        this.inputs.parent.detectChanges();
    }

    openCommentReply(comment) {
        comment.commentsAreOpened = true;
        Comments.writeComment = comment;

        this.detectChanges();
    }

    scrollToForm(form) {
        if (form.scrolled) return;

        form.scrolled = true;

        scrollTo(form, SCROLL_TOP_OFFSET, 500);
    }

    remove() {
        this.service.delete(this.comment.id);

        delete this.commentsList[this.index];

        this.commentsList = Array.reset(this.commentsList);

        this.index = null;
        this.comment = null;
    }

    mentions(text) {
        return this.event('mention', async (e) => {
            if (this.project.members) {
                let members = [].concat(this.project.members);

                for (let higherMember of companyStaffThatCanJoinAnyProject()) {
                    if (members.find(member => member.id === higherMember.user.id)) continue;

                    higherMember.user.isSpecialUser = true;

                    members.push({
                        member: higherMember.user,
                    });
                }

                return members.filter(member => {
                    let user = member.member;

                    if (!user.username) return false;

                    if (text == '') return true;

                    return user.username.match(new RegExp(text, 'g')) || user.name.match(new RegExp(text, 'g'));
                }).map(member => {
                    return {
                        text: member.member.name,
                        value: member.member.username,
                        isSpecialUser: member.member.isSpecialUser,
                    };
                });
            } else {
                if (!text) return [];
                let { records } = await this.usersService.list({
                    username: text,
                    limit: 5,
                });

                return records.map(user => {
                    return {
                        text: user.name,
                        value: user.username,
                    };
                });
            }
        })(text);
    }
}

Comments.writeComment = false;