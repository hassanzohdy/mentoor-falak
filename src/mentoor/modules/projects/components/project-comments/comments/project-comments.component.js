class ProjectComments {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(projectCommentsService) {
        this.service = projectCommentsService;
        this.user = DI.resolve('user');
        this.maxCommentLines = 10;
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.editMode = false;
        this.project = this.inputs.getProp('project');
        this.disableComments = this.inputs.getProp('disableComments');
        this.type = this.inputs.getOption('type');
        this.typeId = this.inputs.getProp('typeId');
        this.parentComment = this.inputs.getProp('parent', null);
        this.commentsList = collect(this.inputs.getProp('comments')).sortByDesc('id').toArray().map(comment => {
            comment.commentsAreOpened = false;

            return comment;
        });

        this.isValidForm = true;
    }

    async submitComment(form) {
        if (this.recordAudio.recordData) {
            let formData = new FormData(form);
            formData.append('record', this.recordAudio.recordData);
            form = formData;
        } else if (this.editRecordAudio && this.editRecordAudio.recordData) {
            let formData = new FormData(form);
            formData.append('record', this.editRecordAudio.recordData);
            form = formData;
        }

        this.isSending = true;

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

        this.fileInput.reset();

        this.isSending = false;
        this.comment = null;
        this.editMode = null;
    }

    confirmRemoving(comment, index) {
        this.comment = comment;
        this.index = index;
        this.confirmDelete = true;
    }

    toggleParentComments() {
        if (!this.parentComment) return;

        this.parentComment.commentsAreOpened = false;

        this.detectChanges();
    }

    remove() {
        this.service.delete(this.comment.id);

        delete this.commentsList[this.index];

        this.commentsList = Array.reset(this.commentsList);

        this.index = null;
        this.comment = null;
    }
}