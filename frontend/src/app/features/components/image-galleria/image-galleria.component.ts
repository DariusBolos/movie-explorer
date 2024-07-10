import { Component, OnInit } from '@angular/core';
import { PhotoService } from '@service/PhotoService/photo-service.service';
import { GalleriaModule } from 'primeng/galleria';

@Component({
    selector: 'image-galleria',
    templateUrl: './image-galleria.component.html',
    standalone: true,
    imports: [GalleriaModule],
    providers: [PhotoService]
})
export class ImageGalleria implements OnInit {
    images: any[] | undefined;

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => (this.images = images));
    }
}