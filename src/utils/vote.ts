function formatVoteAverage2(vote: number) {
    return (Math.floor(vote * 10) / 10).toString().replace(".", ".");
   }
   export default formatVoteAverage2;