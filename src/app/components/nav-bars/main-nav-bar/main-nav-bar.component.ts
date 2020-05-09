import { Component, OnInit, Input, ViewChild, ElementRef,ChangeDetectorRef, AfterViewInit, OnChanges, AfterContentChecked } from '@angular/core';
import { UserAuthDataService } from '../../../services/userData/user-auth-data.service';

@Component({
  selector: 'app-main-nav-bar',
  templateUrl: './main-nav-bar.component.html',
  styleUrls: ['./main-nav-bar.component.scss'],
})
export class MainNavBarComponent implements OnInit {
  @ViewChild('navContainerElement') navContainerElement:ElementRef;
  @Input('isMeditationContainer') isMeditationContainer = false;
  mobileHeader;
  isHeaderOpen = true;
  width:number;
  constructor(private userAuthDataService: UserAuthDataService, private cdr:ChangeDetectorRef) {}

  ngOnInit(): void {}
  handleLogout() {
    this.userAuthDataService.logOutUser();
  }

  ngAfterViewInit(){
     console.log( this.navContainerElement.nativeElement.offsetWidth, 'wd');
   this.width=this.navContainerElement.nativeElement.offsetWidth;
   if(this.navContainerElement.nativeElement.offsetWidth < 450){
     this.mobileHeader = true;
   }else{
     this.mobileHeader = false;
   }
   this.cdr.detectChanges()
  }



  openCloseModal(){
      this.isHeaderOpen = !this.isHeaderOpen
      this.cdr.detectChanges()

  }
}
