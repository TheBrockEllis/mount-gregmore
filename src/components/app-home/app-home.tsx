import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  @State() emoji1: string = "128683";
  @State() name1: string;

  @State() emoji2: string = "128683";
  @State() name2: string;

  @State() emoji3: string = "128683";
  @State() name3: string;

  @State() emoji4: string = "128683";
  @State() name4: string;

  render() {
    return (
      <div class="app-home">

        <div class="mg-container">
          <p class="mountain">/^<span innerHTML={`&#${this.emoji1}`}></span>^\</p>
          <p class="mountain">/^     ^^\</p>
          <p class="mountain">/^^  /^<span innerHTML={`&#${this.emoji2}`}></span>^\  ^^\</p>
          <p class="mountain">/^<span innerHTML={`&#${this.emoji3}`}></span>^   /^^       ^^<span innerHTML={`&#${this.emoji4}`}></span>^\</p>

          <p class="mountain-text">1. {this.name1}</p>
          <p class="mountain-text">2. {this.name2}</p>
          <p class="mountain-text">3. {this.name3}</p>
          <p class="mountain-text">4. {this.name4}</p>
        </div>

        <hr />

        <p class="prompt">Favorite Matthew McConaughey movie.</p>

        <ol>
          <mg-selector position={1} onEmojiSelected={(ev) => this.emoji1 = ev.detail } onTextAdded={(ev) => this.name1 = ev.detail } />
          <mg-selector position={2} onEmojiSelected={(ev) => this.emoji2 = ev.detail } onTextAdded={(ev) => this.name2 = ev.detail } />
          <mg-selector position={3} onEmojiSelected={(ev) => this.emoji3 = ev.detail } onTextAdded={(ev) => this.name3 = ev.detail } />
          <mg-selector position={4} onEmojiSelected={(ev) => this.emoji4 = ev.detail } onTextAdded={(ev) => this.name4 = ev.detail } />
        </ol>
      </div>
    );
  }
}
