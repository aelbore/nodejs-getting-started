
export default class ButtonController {

  constructor(){
    this.styles = ['btn', 'btn-primary'];
    this.isvisible ? this.styles.push('visible') : this.styles.push('hidden'); 
  }

}