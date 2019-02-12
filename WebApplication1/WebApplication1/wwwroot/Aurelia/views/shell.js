var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
//@inject(Hosting)
export class Shell {
    constructor() {
    }
    activate() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('activated');
        });
    }
    attached() {
        console.log('attached');
    }
    deactivate() {
        console.log('deactivate');
    }
    configureRouter(config, router) {
        this.router = router;
        config.title = "Sportstore";
        let routes = [
            {
                route: '',
                redirect: '/products'
            },
            {
                route: 'products',
                name: 'products',
                title: 'products',
                moduleId: './product/product'
            }
        ];
        config.map(routes);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL3NoZWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBS0Esa0JBQWtCO0FBQ2xCO0lBSUk7SUFHQSxDQUFDO0lBRUssUUFBUTs7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdCLENBQUM7S0FBQTtJQUVELFFBQVE7UUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxVQUFVO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsZUFBZSxDQUFDLE1BQTJCLEVBQUUsTUFBYztRQUN2RCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUVyQixNQUFNLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQztRQUU1QixJQUFJLE1BQU0sR0FBRztZQUNUO2dCQUNJLEtBQUssRUFBRSxFQUFFO2dCQUNULFFBQVEsRUFBRSxXQUFXO2FBQ3hCO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFFLFVBQVU7Z0JBQ2pCLElBQUksRUFBRSxVQUFVO2dCQUNoQixLQUFLLEVBQUUsVUFBVTtnQkFDakIsUUFBUSxFQUFFLG1CQUFtQjthQUNoQztTQUNKLENBQUM7UUFDRixNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7QUFFTCxDQUFDO0FBQUEiLCJmaWxlIjoidmlld3Mvc2hlbGwuanMiLCJzb3VyY2VSb290IjoiQXVyZWxpYS9Tb3VyY2UvIn0=
