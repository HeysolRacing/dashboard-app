import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { TitleComponent } from '@shared/title/title.component';
import { UsersService } from '@services/users.service';
import { switchMap } from 'rxjs';
import { User } from '@interfaces/req-response';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './user.component.html',
})
export default class UserComponent {
  private route = inject(ActivatedRoute);
  private usersService = inject(UsersService);

  public user = toSignal(
     this.route.params.pipe(
        switchMap(({ id }) => this.usersService.getUserById(id))
      )
  )

  public titleLabel = computed(() => {
    if (this.user()) {
      return `Welcome :  ${this.user()?.first_name}  ${this.user()?.last_name}.`
    }
    return 'Welcome!!'
  });
}
