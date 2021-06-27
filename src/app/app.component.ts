import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ChainDataService } from './theme/shared/services/chain-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private router: Router, private chaindataservice: ChainDataService) { }

  ngOnInit() {
    const data = this.chaindataservice.getChainData();
    if (!data.chainaddress || !data.chaintype) {
      if (!data.chainaddress) {
        data.chainaddress = "0xfFe1426e77CE0F7c0945fCC1f4196CD8dC3f090A";
      }
      if (!data.chaintype) {
        data.chaintype = "4002";
      }
      this.chaindataservice.setChainData(data.chainaddress,data.chaintype)
    }

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
