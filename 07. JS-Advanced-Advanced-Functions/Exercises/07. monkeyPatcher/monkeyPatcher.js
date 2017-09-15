function patch(input) {
    switch (input){
        case 'upvote': this.upvotes += 1; break;
        case 'downvote': this.downvotes += 1; break;
        case 'score':
            let upvotes = this.upvotes;
            let downvotes = this.downvotes;

            let toIncrement = 0;
            if(upvotes + downvotes > 50){
                let maxElement = Math.max(upvotes, downvotes);
                let incrementValue = Math.ceil(maxElement / 100 * 25);
                toIncrement = incrementValue;
            }

            let balance = upvotes - downvotes;
            let totalVotes = upvotes + downvotes;

            let rating = '';
            if (upvotes + downvotes < 10){
                rating = 'new';
            } else {
                if((upvotes / totalVotes) * 100 > 66 ){
                    rating = 'hot';
                } else if (balance >= 0 && (upvotes > 100 || downvotes > 100)){
                    rating = 'controversial'
                } else if (balance < 0 ){
                    rating = 'unpopular'
                } else {
                    rating = 'new';
                }
            }

            return [upvotes + toIncrement, downvotes + toIncrement, balance, rating];
    }
}

let forumPost = {
    id: '1234',
    author: 'author name',
    content: 'these fields are irrelevant',
    upvotes: 4,
    downvotes: 5
};

console.log(patch.call(forumPost, 'score'));
patch.call(forumPost, 'downvote');
console.log(patch.call(forumPost, 'score'));
patch.call(forumPost, 'upvote');
patch.call(forumPost, 'upvote');
console.log(patch.call(forumPost, 'score'));
for (let i = 0; i < 38; i++) {
    patch.call(forumPost, 'upvote');
}
console.log(patch.call(forumPost, 'score'));
patch.call(forumPost, 'downvote');
console.log(patch.call(forumPost, 'score'));

forumPost.upvotes = 132;
forumPost.downvotes = 68;
console.log(patch.call(forumPost, 'score'));

forumPost.upvotes = 133;
console.log(patch.call(forumPost, 'score'));
