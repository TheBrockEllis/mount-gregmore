import { Component, Event, Host, h, Prop, State, EventEmitter } from '@stencil/core';
import 'emoji-picker-element';

@Component({
  tag: 'mg-selector',
  styleUrl: 'mg-selector.css',
  shadow: true,
})
export class MgSelector {
  @Prop() position: number;
  @State() emojiRanges: Array<Array<number>> = [
    [128513, 128591], [9986, 10160], [128640, 128704]
  ];
  @Event() emojiSelected: EventEmitter<string>;
  @Event() textAdded: EventEmitter<string>;

  emojiSelectedHandler(event) {
    // console.log('selected', event.target.value);
    this.emojiSelected.emit(event.target.value);
  }

  textHandler(event) {
    // console.log('selected', event.target.value);
    this.textAdded.emit(event.target.value);
  }

  render() {

    const options = []
    for (const range of this.emojiRanges) {
      for (let x = range[0]; x < range[1]; x++) {
        options.push(<option value={x} innerHTML={`&#${x}`}></option>);
      }
    }

    return (
      <Host>
        <select name="emoji" onChange={(e) => this.emojiSelectedHandler(e) }>
          {options}
        </select>
        <input type="text" onKeyUp={(e) => this.textHandler(e) }/>
      </Host>
    );
  }

}
