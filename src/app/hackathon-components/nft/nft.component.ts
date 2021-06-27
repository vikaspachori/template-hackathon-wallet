import { Component, ElementRef, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/theme/shared/services/loader.service';
import { TokenBalanceService } from 'src/app/theme/shared/services/token-balance.service';

@Component({
  selector: 'app-nft',
  templateUrl: './nft.component.html',
  styleUrls: ['./nft.component.css']
})
export class NFTComponent implements OnInit {

  constructor(private tokenService: TokenBalanceService, private loaderSerivce: LoaderService) { }
  public NftData = [];
  async ngOnInit(): Promise<void> {
    debugger;
    this.loaderSerivce.showLoader();
    let data = await this.tokenService.getInfo(true);
    this.processNFTData(data);

  }
  public getClass(index) {
    return (index % 2 === 0) ? 'fantom' : 'covalent';
  }
  public chunkArray(myArray, chunk_size) {
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];

    for (index = 0; index < arrayLength; index += chunk_size) {
      let myChunk = myArray.slice(index, index + chunk_size);
      // Do something if you want with the group
      tempArray.push(myChunk);
    }

    return tempArray;
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
    this.NftData = Object.assign([], this.chunkArray(tempArray, tempArray.length / 4));
    this.NftData.reverse();
    setTimeout(() => {
      this.loaderSerivce.hideLoader()
    }, 1000);

  }

}
