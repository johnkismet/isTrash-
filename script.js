const isTrash = (length, skip) => {
    var name = prompt("What's the name of the album?")
    var length = prompt('How many songs are in the album?')
    var skip = prompt("How many songs did you skip?")
    alert('Okay, let me figure this out.')
    lname = name.toLowerCase();
    switch (lname) {
        case 'day69':
        alert('6ix9ine is always trash. Stop that.')
        return;
        break;
        case 'dummy boy':
        alert('6ix9ine is always trash. Stop that.')
        return;
        break;
        case 'redd69':
        alert('6ix9ine is always trash. Stop that.')
        return;
        break;
        case 'vlna':
        alert('6ix9ine is always trash. Stop that.')
        return;
        break;
        case 'storms':
        alert('6ix9ine is always trash. Stop that.')
        return;
        break;
        case 'indigo':
        alert('Why are you wondering if a Chris Brown album is trash?')
        return;
        break;
         case 'royalty':
        alert('Why are you wondering if a Chris Brown album is trash?')
        return;
        break;
         case 'heartbreak on a full moon':
        alert('Why are you wondering if a Chris Brown album is trash?')
        return
        break;
        
         case 'x':
        alert('Why are you wondering if a Chris Brown album is trash?')
        return;
        break;
         case 'chris brown':
        alert('Why are you wondering if a Chris Brown album is trash?')
        return;
        break;
         case 'bad vibes forever':
        alert("...It's fine.")
        return;
        break;
        case 'Skins':
        alert("Decent.")
        return;
        break;
        case '?':
        alert("Hell no")
        return;
        break;
        case '17':
        alert("Hell no")
        return;
        break;
        case 'mania':
        alert("You knew it was bad when you typed it in, you just want to see me agree with you.")
        return;
        break;
        case 'save rock and roll':
        alert("Hell no")
        return;
        break;
        case 'from under the cork tree':
        alert('Hell no')
        return;
        break;
        case 'infiinty on high':
        alert('Hell no')
        return;
        break;
        case 'folie a duex':
        alert('Hell no')
        return;
        break;
        case 'pray for the wicked':
        alert("Trash. It's simple. Black and white. This is trash.")
        return;
        break;
        case 'pretty odd':
        alert('Hell no')
        return;
        break;
        case 'pretty. odd':
        alert('Hell no')
        return;
        break;
        case 'death of a bachelor':
        alert("It's stinky, but checks out.")
        return;
        break;
        case 'vices and virtues':
        alert('Hell no')
        return;
        break;
        case 'vices & virtues':
        alert('Hell no')
        return;
        break;
        
    }

    var response = Math.floor(Math.random() * 10);
    switch (response) {
        case 0:
        response = `${name} is trash, I'm sorry.`
        break;
        case 1:
            response = "Sniff sniff. Trash."
        break;
        case 2:
            response = 'Trash.'
        break;
        case 3:
            response = `We've determined $[name] to be trash.`
        break;
        case 4:
            response = `${name}? Trash.`
        break;
        case 5:
            response = 'Smells like trash. Looks like trash. Must be trash.'
        break;
        case 6:
            response = 'I listened to that the other night, actually! Trash.'
        break;
        case 7:
            response = "I think you and me both know that it's trash"
        }
// Decently comprehensive if/else statement to check all inputs. 
    if (length === "" || skip === "") {
        alert("You didn't put anything. What do you want me to do?")
    }  else if (length <= 0) {
      alert(`Why would you put ${length}? Why? What is that doing, other than trying to tarnish this wonderful programs name?`)
    } else if (length < 6) {
        alert('Less than 6 songs. Not an album. Feel free to buy the premium version to test EP\'s!')
    } else if (length < 9 && skip > 2) {
        alert(response)
    } else if (length < 12 && skip > 4 ) {
        alert(response)
    } else if (length < 15 && skip > 6) {
        alert(response)
    } else if (length < 20 && skip > 9) {
        alert(response)
    } else if (length <= 30 && skip > 14) {
        alert(response)
    } else if (length === 69) {
        alert('Nice.')
    } else if (length === 420) {
        alert('You child. This is meant to be a serious application and frankly, you are tarnishing its good name.')
    } else if (length > 30) {
        alert(`Seriously? ${length}? Why? What's the point. I'm sorry, but that's just too much.`)
    } else {
        alert(`${name} checks out. Not trash.`)
    }
}



