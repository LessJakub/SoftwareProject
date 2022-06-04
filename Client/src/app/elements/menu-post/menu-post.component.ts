import { Component, Input, OnInit } from '@angular/core';
import { Dish } from 'src/app/models/Dish';
import { SearchTileComponent } from 'src/app/search-page/search-tile/search-tile.component';

@Component({
  selector: 'app-menu-post',
  template: `
    <div class="flex w-full h-full bg-gray-50 border-2 p-4 border-green-900 rounded-2xl overflow-hidden">
        <div class="flex flex-grow w-fit h-full">
            <app-search-tile [model]="model" [showDescription]="false"></app-search-tile>
        </div>

        <div class="flex flex-col flex-grow w-2/4 m-8 overflow-hidden ml-16">

            <p class="text-2xl font-bold truncate text-green-900">{{model.name}}</p>
            <p class="text-base text-gray-900">{{model.description}}</p>
        </div>

        <div class="flex w-1/4 h-full bg-blue-500">

            <!-- <div class="flex flex-grow flex-col space-y-1">

                    <div class="w-full h-1/2 flex gap-4">
                        <div class="w-1/4 h-full justify-start flex">
                            <button (click)="decrementCount()" class="h-full aspect-square border text-md font-medium rounded-xl text-green-900 bg-gray-50 hover:bg-green-900 hover:text-gray-50 border-green-900">
                                -
                            </button>
                        </div>

                        <div class="w-2/4 h-full justify-center flex">
                            <button class="h-full w-full border text-md font-medium rounded-xl text-green-900 bg-gray-50 hover:bg-green-900 hover:text-gray-50 border-green-900">
                                {{orderCount}}
                            </button>
                        </div>

                        <div class="w-1/4 h-full justify-end flex">
                            <button (click)="incrementCount()" class="h-full aspect-square border text-md font-medium rounded-xl text-green-900 bg-gray-50 hover:bg-green-900 hover:text-gray-50 border-green-900">
                                +
                            </button>
                        </div>
                    </div>

                    <div class="w-full h-1/2 flex">
                        <div class="w-full h-full justify-center flex">
                            <button (click)="takeOrder()" class="flex justify-center group items-center gap-x-2 h-full w-full border text-md font-medium rounded-xl text-green-900 bg-gray-50 hover:bg-green-900 hover:text-gray-50 border-green-900">
                                Add to Cart

                                <svg class="stroke-green-900 group-hover:stroke-gray-50" width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1H3L3.4 3M3.4 3H19L15 11H5M3.4 3L5 11M5 11L2.707 13.293C2.077 13.923 2.523 15 3.414 15H15M15 15C14.4696 15 13.9609 15.2107 13.5858 15.5858C13.2107 15.9609 13 16.4696 13 17C13 17.5304 13.2107 18.0391 13.5858 18.4142C13.9609 18.7893 14.4696 19 15 19C15.5304 19 16.0391 18.7893 16.4142 18.4142C16.7893 18.0391 17 17.5304 17 17C17 16.4696 16.7893 15.9609 16.4142 15.5858C16.0391 15.2107 15.5304 15 15 15ZM7 17C7 17.5304 6.78929 18.0391 6.41421 18.4142C6.03914 18.7893 5.53043 19 5 19C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17C3 16.4696 3.21071 15.9609 3.58579 15.5858C3.96086 15.2107 4.46957 15 5 15C5.53043 15 6.03914 15.2107 6.41421 15.5858C6.78929 15.9609 7 16.4696 7 17Z" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
        
                            </button>
                    </div>
                </div>

            </div> -->
        </div>
    </div>
  `,
})
export class MenuPostComponent implements OnInit {

  constructor() { }

  @Input() model: Dish;

  orderCount: number = 0;

  ngOnInit(): void {
  }

  incrementCount() {
      this.orderCount += 1;
  }

  decrementCount() {
    this.orderCount -= 1;
}

takeOrder() {}

}