import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dish } from 'src/app/models/Dish';
import { Post } from 'src/app/models/post';
import { DishDTO } from '../../models/DishDTO';
import { RestaurantDTO } from '../../models/RestaurantDTO';
import { BlobUploadService } from '../../services/blob-upload.service';
import { SearchService } from '../../services/search.service';

@Component({
    selector: 'app-restaurant-page',
    templateUrl: './restaurant-page.component.html',
    host: { 'class': 'flex-auto flex justify-center items-center' } // ! Styling host container to fill all avialable space
})
export class RestaurantPageComponent implements OnInit {

    restaurantID: number = null;
    restaurant: RestaurantDTO | null;
    profileImageURL: string;

    fetchedDishes: DishDTO[] = null;

    isFollowing: boolean = false;
    followButtonText = this.isFollowing ? "Unfollow" : "Follow";

    // Dummy
    fetchedDishes2: Dish[];
    fetchedPosts: Post[] | null;

    constructor(private activatedRoute: ActivatedRoute,
        private searchService: SearchService,
        private uploadService: BlobUploadService,
        private router: Router) { }

    updateUrlWithDefault() {
        this.profileImageURL = this.uploadService.defaultRestaurantImageURL();
    }

    selectedTabID: number = 0;

    followButtonAction() {
        if (this.isFollowing) {
            // Perform unfollow action when ready

            this.isFollowing = false;
            this.followButtonText = "Follow"
        }
        else {
            // Perform follow action when ready
            this.isFollowing = true;
            this.followButtonText = "Unfollow"
        }
    }

    selectNewTab(selectedID: number) {
        this.selectedTabID = selectedID;

        switch (this.selectedTabID) {
            case 0:
                this.getDishes();
                return;
            case 1:
                this.getPosts();
                return;
            case 2:
                this.getActivity();
                return;
        }
    }

    private async getDetails() {
        // Obtain restaurant from DB based on ID.
        await this.searchService.searchRestaurantByID(this.restaurantID).then((restaurant) => {
            this.restaurant = restaurant;
        })

        if (this.restaurant == null) {
            console.log("No restaurant found for ID:" + this.restaurantID)
            // this.router.navigate(['*']);
        }

        // Assign data obtained from services to component.
        this.profileImageURL = this.uploadService.restaurantImageURL(this.restaurantID);
    }

    private async getDishes() {
        console.log("Restaurant - Dishes Getter");
        this.fetchedDishes = await this.searchService.searchDishesByID(this.restaurantID);
    }

    private async getPosts() {
        console.log("Restaurant - Posts Getter");
    }

    private async getActivity() {
        console.log("Restaurant - Activity Getter")
    }

    ngOnInit(): void {
        // Obtain restaurant ID from ActivatedRouter.
        this.restaurantID = this.activatedRoute.snapshot.params['id'];

        if (this.restaurantID == NaN) {
            this.router.navigate(['*']);
        }

        this.getDetails();
        this.getDishes();

        this.fetchedPosts = [
            { date: new Date(2022, 4, 16), likes: 13, imageURL: "/assets/images/3W2A0606@0.5x.webp", description: "Great sushy!", taggedRestaurant: "SushiDoo", user: "Daniel Hankel", grades: [{ category: "Taste", grade: 5 }, { category: "Serving", grade: 5 }, { category: "Atmosphere", grade: 5 }] },
            {
                date: new Date(2022, 4, 11), likes: 8, imageURL: "/assets/images/3W2A0956@0.5x.webp", description: "Wow, this is such a nice place with fantastic food. If you're looking for great sushi and very friendly sushimasters then this is the spot! " +
                    "I've been to many sushi bars but this one is going to really make me visit over and over again! 100% reccomend! By the way check out my account for other reccomendations of the best restaurants round town!", taggedRestaurant: "SushiDoo", user: "Billie Thongroght",
                grades: [{ category: "Taste", grade: 5 }, { category: "Atmosphere", grade: 5 }, { category: "Service", grade: 5 }, { category: "Price", grade: 4 }, { category: "Serving", grade: 5 }]
            },
            { date: new Date(2022, 4, 16), likes: 2, imageURL: "/assets/images/W2A6423@0.5x.webp", description: "Very tasty!", taggedRestaurant: "SushiDoo", user: "Eli Bentalc", grades: [{ category: "Taste", grade: 5 }, { category: "Price", grade: 3 }] },
            { date: new Date(2022, 4, 17), likes: 134, imageURL: "/assets/images/3W2A0925@0.5x.webp", description: "A bit bland", taggedRestaurant: "SushiDoo", user: "Margaret Nam", grades: [{ category: "Taste", grade: 3 }] },
            {
                date: new Date(2022, 4, 11), likes: 8, imageURL: "/assets/images/3W2A0956@0.5x.webp", description: "Wow, this is such a nice place with fantastic food. If you're looking for great sushi and very friendly sushimasters then this is the spot! " +
                    "I've been to many sushi bars but this one is going to really make me visit over and over again! 100% reccomend! By the way check out my account for other reccomendations of the best restaurants round town!", taggedRestaurant: "SushiDoo", user: "Billie Thongroght",
                grades: [{ category: "Taste", grade: 5 }, { category: "Atmosphere", grade: 5 }, { category: "Service", grade: 5 }, { category: "Price", grade: 4 }, { category: "Serving", grade: 5 }]
            }
        ]

        this.fetchedDishes2 = [
            { name: "Hosomaki", imageURL: ["/assets/images/3W2A0606@0.5x.webp", "/assets/images/3W2A0606@0.5x.webp"], grade: [4, 2, 3, 3], description: "With fresh mango or tuna. 6 pcs", price: 15, restaurant: "Japan Sun" },
            { name: "Uramaki", imageURL: ["/assets/images/3W2A0699@0.5x.webp", "/assets/images/3W2A0699@0.5x.webp"], grade: [5, 3, 5, 4], description: "Avocado uramaki with soy sauce.", price: 20, restaurant: "Japan Sun" },

            {
                name: "Curry & Shrimps", imageURL: ["/assets/images/W2A6423@0.5x.webp", "/assets/images/W2A6423@0.5x.webp"], grade: [5, 5, 4, 5],
                description: "Green curry with shrimps, vegetables and jasmin rice. Decorated with edible flowers and coriander. Ideal dish for shrimp-lovers but not only. This is a dummy text which i had to add because im not very creative and i had no idea what to write in the description apart from the ingredients list",
                price: 23, restaurant: "Japan Sun"
            },

            { name: "Fried Ice-Cream", imageURL: ["/assets/images/W2A6500@0.5x.webp", "/assets/images/W2A6500@0.5x.webp"], grade: [4, 3, 2, 3], description: "Fried ice cream with mango pulp", price: 17, restaurant: "Japan Sun" },
            { name: "Fusion Rolls", imageURL: ["/assets/images/W2A6389@0.5x.webp"], grade: [4, 3, 2, 4], description: "Salmon marinated in togarashi, avocado, mango sauce, micro greens", price: 24, restaurant: "Japan Sun" },
            { name: "Sashimi", imageURL: ["/assets/images/3W2A0746@0.5x.webp"], grade: [3, 1, 2, 3], description: "Salmon, tuna, butterfish, 12 pcs", price: 35, restaurant: "Japan Sun" },
            { name: "Wakame Salad", imageURL: ["/assets/images/3W2A0956@0.5x.webp"], grade: [5, 4, 5, 5], description: "Seaweed, sesame seeds, cucumber, rice vinegar", price: 29, restaurant: "Japan Sun" },
            { name: "Tom Yam Kung ", imageURL: ["/assets/images/3W2A0925@0.5x.webp"], grade: [5, 3, 4, 4], description: "Thai soup with shrimps, coconut milk and vegetables", price: 26, restaurant: "Japan Sun" },
        ]
    }

}