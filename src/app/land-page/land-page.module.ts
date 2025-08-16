import { NgModule } from "@angular/core";
import { NotFoundComponent } from "./not-found/not-found.component";
import { CardsComponent } from "./cards/cards.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { HeroComponent } from "./hero/hero.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
    declarations: [
        CardsComponent,
        FooterComponent,
        HeaderComponent,
        HeroComponent,
        NotFoundComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
    ],
    exports: [
       CardsComponent,
        FooterComponent,
        HeaderComponent,
        HeroComponent,
        NotFoundComponent
    ]
})
export class LandPageModule{}