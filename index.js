function saturdayFun(activity = "roller-skate") {
     return `This Saturday, I want to ${activity}!`
}

const mondayWork = function (activity = "go to the office") {
        return `This Monday, I will ${activity}.`
}

function wrapAdjective(visualFlair = "*") {
   return function(type = "special") {
    return `You are ${visualFlair}${type}${visualFlair}!`
   }
}

