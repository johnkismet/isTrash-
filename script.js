const isTrash = (length, skip) => {
    var length = prompt('How many songs are in the album?')
    var skip = prompt("How many songs did you skip?")
    alert('Okay, let me figure this out.')

    if (length === "" || skip === "") {
        alert("You didn't put anything. What do you want me to do?")
    } else if (length <= 0) {
      alert(`Why would you put ${length}? Why? What is that doing, other than trying to tarnish this wonderful programs name?`)
    } else if (length < 6) {
        alert('Less than 6 songs. Not an album. Feel free to buy the premium version to test EP\'s!')
    } else if (length < 9 && skip > 2) {
        alert('Trash.')
    } else if (length < 12 && skip > 4 ) {
        alert('Trash.')
    } else if (length < 15 && skip > 6) {
        alert('Trash.')
    } else if (length < 20 && skip > 9) {
        alert('Trash.')
    } else if (length <= 30 && skip > 14) {
        alert('Trash.')
    } else if (length === 69) {
        alert('Nice.')
    } else if (length === 420) {
        alert('You child. This is meant to be a serious application and frankly, you are tarnishing its good name.')
    } else if (length > 30) {
        alert(`Seriously? ${length}? Why? What's the point. I'm sorry, but that's just too much.`)
    } else {
        alert("Not trash, but watch out.")
    }
}



