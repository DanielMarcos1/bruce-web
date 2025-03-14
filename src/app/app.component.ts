import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SocialstatsComponent } from "./socialstats/socialstats.component";
import { AboutComponent } from "./about/about.component";
import { CatalogComponent } from "./catalog/catalog.component";
import { SocialproofComponent } from "./socialproof/socialproof.component";
import { FinalctaComponent } from "./finalcta/finalcta.component";
import { FooterComponent } from "./footer/footer.component";
import { HeroComponent } from "./hero/hero.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, SocialstatsComponent, AboutComponent, CatalogComponent, SocialproofComponent, FinalctaComponent, FooterComponent, HeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  preserveWhitespaces: false,
})
export class AppComponent {
  title = 'bruce-web';
}
