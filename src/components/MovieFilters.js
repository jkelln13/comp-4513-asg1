import React from 'react'

class MovieFilters extends React.Component{

    constructor(){
        super();
        this.state = {
            selectedRadio: null,
            titleDisabled: null,
            genreDisabled: null,
            yearDisabled: null,
            ratingDisabled: null,
        }

        this.radioButtonSelected = this.radioButtonSelected.bind(this);
        this.reset = this.reset.bind(this);
    }

    radioButtonSelected(value){
        this.setState({
            selectedRadio: value.target.value,
        });
        //Handles disabling other inputs
        switch(value.target.value){
            case 'title':
                this.setState({
                    genreDisabled: true,
                    yearDisabled: true,
                    ratingDisabled: true
                })
            break
            case 'genre':
                this.setState({
                    titleDisabled: true,
                    yearDisabled: true,
                    ratingDisabled: true
                })
            break
            case 'year':
                this.setState({
                    titleDisabled: true,
                    genreDisabled: true,
                    ratingDisabled: true
                })
            break
            case 'rating':
                this.setState({
                    titleDisabled: true,
                    genreDisabled: true,
                    yearDisabled: true
                })
            break

            default:
                return null
        }

        console.log(`VALUE IS: ${value.target.value}`)
    }

    //Resets all radio buttons & text inputs
    reset(){
        this.setState({
            selectedRadio: null,
            titleDisabled: null,
            genreDisabled: null,
            yearDisabled: null,
            ratingDisabled: null,
        });

        this.clearTitle.reset();
        this.clearGenre.reset();
        this.clearYear.reset();
        this.clearRating.reset();
    }

    render(){
        return(
                <div class="h-screen col-span-2 row-span-10 bg-blue-300 rounded-xl p-8 ">
                <p class="text-2xl text-center font-semibold pb-16">Movie Filters</p>

                {/*TITLE INPUT*/}
                <form ref={(el) => {this.clearTitle = el;}} class="flex justify-between items-center pb-8">
                    <input disabled={(this.state.titleDisabled) ? "disabled":""} value="title" onChange={this.radioButtonSelected} checked={this.state.selectedRadio === "title"} id="radio-1" type="radio" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="radio-1" class="text-2xl font-semibold">Title</label>
                    <input disabled={(this.state.titleDisabled) ? "disabled":""} id="title" class="searchBar-area"></input>
                </form>

                {/*GENRE INPUT*/}
                <form ref={(el) => {this.clearGenre = el;}} class="flex justify-between items-center pb-8">
                    <input disabled={(this.state.genreDisabled) ? "disabled":""} value="genre" onChange={this.radioButtonSelected} checked={this.state.selectedRadio === "genre"} id="radio-2" type="radio" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label for="radio-2" class="text-2xl font-semibold">Genre</label>
                    <input disabled={(this.state.genreDisabled) ? "disabled":""} class="searchBar-area"></input>
                </form>

                {/*YEAR INPUTS*/}
                <form ref={(el) => {this.clearYear = el;}} class="flex-co justify-between items-center pb-8">

                    <div class="flex justify-between items-center">
                        <input disabled={(this.state.yearDisabled) ? "disabled":""} onChange={this.radioButtonSelected} checked={this.state.selectedRadio === "year"} id="radio-3" type="radio" value="year" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                        <label for="radio-3" class="text-2xl font-semibold">Year</label>
                        <input disabled={(this.state.yearDisabled) ? "disabled":""} class="searchBar-area invisible"></input>
                    </div>

                    <div class="flex justify-end pt-4">
                        <label for="year-less" class="text-xl font-semibold pr-2">Less</label>
                        <input disabled={(this.state.yearDisabled) ? "disabled":""} id="year-less" class="searchBar-area"></input>
                    </div>

                    <div class="flex justify-end pt-4">
                        <label for="year-greater" class="text-xl font-semibold pr-2">Greater</label>
                        <input disabled={(this.state.yearDisabled) ? "disabled":""} id="year-greater" class="searchBar-area"></input>
                    </div>

                </form>

                {/*RATING INPUTS*/}
                <form ref={(el) => {this.clearRating = el;}} class="flex-co justify-between items-center pb-8">

                    <div class="flex justify-between items-center">
                        <input disabled={(this.state.ratingDisabled) ? "disabled":""} onChange={this.radioButtonSelected} checked={this.state.selectedRadio === "rating"} id="radio-3" type="radio" value="rating" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                        <label for="radio-3" class="text-2xl font-semibold">Rating</label>
                        <input disabled={(this.state.ratingDisabled) ? "disabled":""} class="searchBar-area invisible"></input>
                    </div>

                    <div class="flex justify-end pt-4">
                        <label for="year-less" class="text-xl font-semibold pr-2">Less</label>
                        <input disabled={(this.state.ratingDisabled) ? "disabled":""} id="year-less" class="searchBar-area"></input>
                    </div>

                    <div class="flex justify-end pt-4">
                        <label for="year-greater" class="text-xl font-semibold pr-2">Greater</label>
                        <input disabled={(this.state.ratingDisabled) ? "disabled":""} id="year-greater" class="searchBar-area"></input>
                    </div>
                </form>

                <div class="grid grid-cols-10 pt-4">
                    <button class="col-start-2 col-span-3 mx-auto bg-slate-600 hover:bg-indigo-700 text-white text-base py-3 px-10 rounded">Filter</button>
                    <button onClick={this.reset} class="col-start-7 col-span-3 mx-auto bg-slate-600 hover:bg-indigo-700 text-white text-base py-3 px-10 rounded">Clear</button>
                </div>

                </div>
                
        )}
}

export default MovieFilters