/challenges/{:id}
- id 
- title
- startsAt
- endsAt
- description
- approvedBy
- isApproved
- reward 
- level 
- type => quiz|code
- acceptedProgrammingLanguages[] => tags
- RP => Reputition Points 
- participantss 
- isEnded 
- questions[]
    - question
        - question
        - answers[]     
            - id 
            - createdAt
            - createdBy 
            - answer 
            - isPreviewwed 
            - previewedBy 
            - rating
            - feedback
            - reward 
            - RP   

/challenges 
- id 
- title 
- startsAt
- endsAt 
- description
- reward 
- RP
- isEnded
- level 

/challenges/new 

title 
description
level 
type 
questions[]
acceptedProgrammingLanguages[] => Tags 



/challenges/pending 
same as challenges response 
/challenges/{id}/approve  
/challenges/{id}/decline
    -> Notes 

participants sends answer 
/challenges/{id}/submit 
- questions[]
    - question   => question id 
    - answer 

moderator sends aaaaaaanswers preview 
/challenges/{id}/answers-preview 
- answers[]
    - question   => question id 
    - answer => answer id 
    - notes 
    - rating 

/challenges/top-ranking 
- records[]
    - Basic User Info 
    - RP 
