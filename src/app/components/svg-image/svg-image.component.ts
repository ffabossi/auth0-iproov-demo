import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-image',
  templateUrl: './svg-image.component.html',
  styleUrls: ['./svg-image.component.scss']
})
export class SvgImageComponent {

  @Input() pathData: string = '';
  @Input() svgFill: string = '';
  @Input() height: string = '';
  @Input() width: string = '';
  @Input() viewbox: string = '';
  @Input() class: string = ''

}
