class Movie {
    constructor(id, title, director) {
        this.id = id;
        this.title = title;
        this.director = director;
    }

    getDetails() {
        return `${this.title} directed by ${this.director}`;
    }
}

class FranchiseFilm extends Movie {
    constructor(id, title, director, franchiseName, installmentNumber, totalInstallments) {
        super(id, title, director);
        this.franchiseName = franchiseName;
        this.installmentNumber = installmentNumber;
        this.totalInstallments = totalInstallments;
    }

    getDetails() {
        return `${this.franchiseName} - Installment ${this.installmentNumber} of ${this.totalInstallments}: ${super.getDetails()}`;
    }
}

module.exports = { Movie, FranchiseFilm };