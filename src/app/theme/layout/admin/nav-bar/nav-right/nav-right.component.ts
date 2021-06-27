import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { ChainDataService } from 'src/app/theme/shared/services/chain-data.service';

@Component({
  selector: 'app-nav-right',
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavRightComponent implements OnInit {

  constructor(private chaindata: ChainDataService) { }
  public chaintype = '250';
  public chainaddress = ''
  ngOnInit() {
    const data = this.chaindata.getChainData();
    debugger;
    this.chaintype = data.chaintype;
    this.chainaddress = data.chainaddress;
  }

  onSave() {
    this.chaindata.setChainData(this.chainaddress, this.chaintype)
  }
}
