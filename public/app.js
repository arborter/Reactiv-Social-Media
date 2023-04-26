


'use strict'; 


const e = React.createElement;

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}



function f() {
  return 'this is about me'
}

new class about {
  render() {
    return f;
  }
}

const domContainer = document.querySelector('#button');
const root = ReactDOM.createRoot(domContainer);
root.render(e(Button));

const domContainer2 = document.querySelector('#about');
const root2 = ReactDOM.createRoot(domContainer2);
root2.render(f(about));












// Simple console log:
class Info {
  constructor(title, information){
    this.title=title;
    this.information=information;
  }
  present() {
    console.log(this.title, this.information);
  }
}

let title= new Info("Graffito:", "I made this so that people can feel alone together");
title.present();


export default function NewPost() {
  return (
    <label>
      Write your post:
      <textarea name="postContent" rows={4} cols={40} />
    </label>
  );
}
