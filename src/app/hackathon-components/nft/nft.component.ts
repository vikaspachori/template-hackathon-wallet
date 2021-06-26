import { Component, OnInit } from '@angular/core';
import { TokenBalanceService } from 'src/app/theme/shared/services/token-balance.service';

@Component({
  selector: 'app-nft',
  templateUrl: './nft.component.html',
  styleUrls: ['./nft.component.scss']
})
export class NFTComponent implements OnInit {

  constructor(private tokenService: TokenBalanceService) { }
  public NftData = [];
  async ngOnInit(): Promise<void> {
    let data = await this.tokenService.getInfo(true);
    data;
    this.processNFTData(data);

  }
  public getClass(index) {
    return (index % 2 === 0) ? 'fantom' : 'covalent';
  }
  public processNFTData(data: any) {
    data = data.data;
    const tempArray = [];
    for (let index = 0; index < data.items.length; index++) {
      const nftItems = data.items[index].nft_data;
      if (nftItems && nftItems.length > 0) {
        for (let j = 0; j < nftItems.length; j++) {
          const nftItem = nftItems[j];
          const tempObj = {} as any;
          tempObj.created_by_address = nftItem.created_by_address;
          tempObj.name = nftItem.external_data.name;
          tempObj.description = nftItem.external_data.description;
          tempObj.image = nftItem.external_data.image;
          tempObj.original_owner = nftItem.original_owner;
          tempArray.push(tempObj);
        }
      }
    }
    this.NftData = Object.assign([], tempArray);
    debugger;
  }
}
