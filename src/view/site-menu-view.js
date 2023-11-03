export const createMenuTemplate = (films) => {

    const navFilmsCount = {
        isWatchlist: 0,
        isWatched: 0,
        isFavorite: 0,
    }

    films.forEach((film) => {
        if (film.isWatchlist) {
            navFilmsCount.isWatchlist++
        }
        if (film.isWatched) {
            navFilmsCount.isWatched++
        }
        if (film.isFavorite) {
            navFilmsCount.isFavorite++
        }
    })

    return `<nav class="main-navigation">
                <div class="main-navigation__items">
                <a href="#all" class="main-navigation__item main-navigation__item--active" data-name="all-films">All movies</a>
                <a href="#watchlist" class="main-navigation__item" data-name="isWatchlist">Watchlist <span class="main-navigation__item-count">${navFilmsCount.isWatchlist}</span></a>
                <a href="#history" class="main-navigation__item" data-name="isWatched">History <span class="main-navigation__item-count">${navFilmsCount.isWatched}</span></a>
                <a href="#favorites" class="main-navigation__item" data-name="isFavorite">Favorites <span class="main-navigation__item-count">${navFilmsCount.isFavorite}</span></a>
                </div>
                <a href="#stats" class="main-navigation__additional">Stats</a>
            </nav>`
}