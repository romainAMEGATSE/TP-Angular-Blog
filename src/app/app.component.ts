import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TP BLOG';

  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
              'Vestibulum non hendrerit mi. Nam nec turpis quis arcu porttitor ' +
              'scelerisque. Aliquam vel nulla dictum ipsum placerat hendrerit a sit ' +
              'amet arcu. Duis id est ac nibh laoreet dictum. Vivamus consectetur ' +
              'ultricies cursus. Lorem ipsum dolor sit amet, consectetur ' +
              'adipiscing elit. Nullam fermentum ipsum elit, nec consectetur massa scelerisque et.',
      loveIts: 0,
      created_at: Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Etiam eget accumsan nulla. Pellentesque interdum lorem non libero lacinia, ' +
               'ut venenatis massa porttitor. Ut a arcu ultrices, cursus ipsum sit amet, ultricies tortor.' +
               'Morbi a dolor eget orci suscipit hendrerit. Duis iaculis fringilla turpis, ' +
               'vel tincidunt ante mattis nec. Aliquam lobortis purus suscipit vehicula sagittis.',
      loveIts: 0,
      created_at: Date()
    },
    {
      title: 'Encore un post',
      content: 'Duis sollicitudin tortor et mauris ullamcorper, in posuere mi hendrerit. ' +
               'Suspendisse tincidunt velit et mi pulvinar facilisis. Etiam pulvinar mi sed ' +
               'sapien suscipit ultricies. Fusce finibus sapien purus, sed consequat orci volutpat id. ' +
               'Pellentesque vehicula mauris sed odio ornare bibendum.',
      loveIts: 0,
      created_at: Date()
    }
  ];
}
