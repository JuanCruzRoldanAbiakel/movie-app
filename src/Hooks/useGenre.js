const useGenre = (selectedGenres) => {
    if (selectedGenres < 1) {
        return "";
    };
    const GenresIds = selectedGenres.map((g) => g.id);
    return GenresIds.reduce((accumulator, currentValue) => accumulator + "," + currentValue);
};
export default useGenre;