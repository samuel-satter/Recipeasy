<template>
    <div class="br"></div>
    <div class="comment">
        <h2>Kommentarer</h2>
        <SuccessAlert v-if="successMsg" :message="successMsg" />
        <WarningAlert v-else-if="invalidErrorMsg" :message="invalidErrorMsg" />
        <CommentForm v-else @submit="submitComment" v-model:name="nameInput" v-model:comment="commentInput" :isInputValid="isInputValid" />
        <PreviousComments v-if="comments.length > 0" :comments="comments" />
    </div>
</template>

<script>
import SuccessAlert from './SuccessAlertComponent.vue';
import WarningAlert from './WarningAlertComponent.vue';
import CommentForm from './CommentFormComponent.vue';
import PreviousComments from './PreviousCommentsComponent.vue';
import commentService from '../apiCommentService.js';

export default {
    components: {
        SuccessAlert,
        WarningAlert,
        CommentForm,
        PreviousComments
    },
    props: {
        id: String,
    },
    data() {
        return {
            userComment: "",
            userName: "",
            isPostingComment: false,
            comments: [],
            successMessage: ""
        }
    },
    computed: {
        validationErrorMessage() {
            if (this.userComment == "" || this.userName == "") {
                return "*Fyll i båda fälten";
            }
            return "";
        },
        isFormValid() {
            return this.userComment != "" && this.userName != "" && this.isPostingComment == false;
        }
    },
    methods: {
        async postComment() {
            this.isPostingComment = true;
            const json = await commentService.postComment(this.id, this.userComment, this.userName);
            console.log(json);
            this.successMessage = "";
        },
        async fetchComments() {
            const data = await commentService.fetchComments(this.id);
            console.log(data);
            this.comments = data;
        },

        formatDate(dateString) {
            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            };
            return new Date(dateString).toLocaleDateString(undefined, options);
        }
    },
    mounted() {
        this.fetchComments();
    }
}
</script>