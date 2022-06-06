import { Injectable } from '@angular/core';
import { DishDTO } from 'src/app/shared/models/DishDTO';
import { User } from 'src/app/shared/models/UserDTO';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AccountService } from 'src/app/shared/services/account.service';
import { tokenize } from '@angular/compiler/src/ml_parser/lexer';

@Injectable({
    providedIn: 'root'
})
export class RestaurantService {

    // Obtain true hostname URL (fixes issue where we need to connect to API on non-local host)
    private baseUrl: string = "http://" + location.hostname;
    private addDishURL: string = this.baseUrl + ":8080/api/Dishes/Restaurants/"

    constructor(private http: HttpClient, private accountService: AccountService) { }

    addDish(id: number, model: DishDTO) {

        var idontcare;
        var authToken = this.accountService.currentUser$.subscribe((user: User) => {
            console.log(user);
            idontcare = user.token;
            console.log(idontcare);
        })
        return this.http.post<DishDTO>(this.addDishURL + id + "/dishes", model,{headers: new HttpHeaders().set('Authorization', 'Bearer ' + idontcare)}).pipe(
            map((Response: DishDTO) => {
                return Response;
            }, error => {
                console.log(error);
            }));
    }


    // /**
    //  * Returns RestaurantDTO object identified by given ID.
    //  * @param id Restaurant ID
    //  * @returns RestaurantDTO object, null if not found.
    //  */
    //  async searchRestaurantByID(id: number) {
    //     if (id == null || id == NaN) {
    //         return null;
    //     }
    //     return await this.http.get<RestaurantDTO>(this.restaurantDetailURL + id).toPromise();
    // }
}