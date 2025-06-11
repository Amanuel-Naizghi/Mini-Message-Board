const {format} = require("date-fns");

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: format(new Date(),"MMMM d,yyyy 'at' h:mm a"),
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: format(new Date(),"MMMM d,yyyy 'at' h:mm a"),
    }
];

const getIndex = (req,res)=>{
    res.render("index",{info:messages});
}

module.exports = {getIndex};