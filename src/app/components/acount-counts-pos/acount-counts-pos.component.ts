import { Component, OnInit, Input } from '@angular/core'
import { IAcountNums } from '../../models/acounts'

@Component({
  selector: 'app-acount-counts-pos',
  templateUrl: './acount-counts-pos.component.html',
  styleUrls: ['./acount-counts-pos.component.scss']
})
export class AcountCountsPosComponent implements OnInit {
	@Input() acountCountsPos: IAcountNums
  @Input() lastPos: boolean

	constructor() { }

	ngOnInit(): void {
	}

}
