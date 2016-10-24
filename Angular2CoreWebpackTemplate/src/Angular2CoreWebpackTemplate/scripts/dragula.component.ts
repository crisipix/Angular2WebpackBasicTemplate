import { Component } from '@angular/core';
import {Dragula, DragulaService} from 'ng2-dragula/ng2-dragula';

@Component({
    selector: 'drag-test',
    template: `<h1>Drag the below</h1>
      <div>
    <div class='wrapper'>
      <div class='container' [dragula]='"first-bag"'>
        <div>You can move these elements between these two containers</div>
        <div>Moving them anywhere else isn't quite possible</div>
        <div>There's also the possibility of moving elements around in the same container, changing their position</div>
        <div>Read this :<a href='https://github.com/valor-software/ng2-dragula/issues/89</div>'>system js issue  </a>
      </div>
      <div class='container' [dragula]='"first-bag"'>
        <div>This is the default use case. You only need to specify the containers you want to use</div>
        <div>More interactive use cases lie ahead</div>
        <div>Make sure to check out the <a href='https://github.com/bevacqua/dragula#readme'>documentation on GitHub!</a></div>
      </div>
    </div>
  </div>
    `,
    directives: [Dragula],
    viewProviders: [DragulaService]
})

export class DragulaComponent {
    // oks
    constructor() {
    }
}