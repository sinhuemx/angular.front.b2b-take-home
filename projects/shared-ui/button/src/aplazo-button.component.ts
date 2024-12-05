import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import {
  AplazoElementAppearanceDirective,
  AplazoElementColorDirective,
  AplazoElementDisabledDirective,
  AplazoElementPreventClickDirective,
  AplazoCommonSizeDirective
} from '@apz/shared-ui';

interface ButtonClassnamesConfig {
  base: string;
  fullWidth: string;
  rounded: string;
}

@Component({
  selector: 'button[aplzButton], a[aplzButton]',
  standalone: true,
  imports: [
    NgClass,
    AplazoElementAppearanceDirective,
    AplazoElementColorDirective,
    AplazoElementDisabledDirective,
    AplazoElementPreventClickDirective,
    AplazoCommonSizeDirective
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <ng-content></ng-content> `,
  hostDirectives: [
    {
      directive: AplazoElementAppearanceDirective,
      inputs: ['aplzAppearance']
    },
    {
      directive: AplazoElementColorDirective,
      inputs: ['aplzColor']
    },
    {
      directive: AplazoElementDisabledDirective,
      inputs: ['disabled']
    },
    {
      directive: AplazoElementPreventClickDirective
    },
    {
      directive: AplazoCommonSizeDirective,
      inputs: ['size']
    }
  ],
  styleUrls: ['./aplazo-button.component.css'],
})
export class AplazoButtonComponent {
  readonly #buttonClassnames: ButtonClassnamesConfig = {
    base: 'aplazo-base-button',
    fullWidth: '',
    rounded: '',
  };

  @HostBinding('class')
  @Input()
  set class(value: string | null) {
    if (value == null || value === '') {
      this.#class = null;
      return;
    }

    this.#class = value;
  }
  get class(): string | null {
    const classes = new Set<string>([
      ...Object.values(this.#buttonClassnames).filter(Boolean),
    ]);
    if (this.#class != null) {
      this.#class.split(' ').forEach((c) => classes.add(c));
    }

    return Array.from(classes).join(' ');
  }
  #class: string | null = null;

  @Input()
  set fullWidth(value: boolean | undefined) {
    if (value == null || value === false) {
      this.#buttonClassnames.fullWidth = '';
      return;
    }

    this.#buttonClassnames.fullWidth = 'btn-full-width';
  }

  @Input()
  public set rounded(value: boolean | undefined) {
    if (value == null || value === false) {
      this.#buttonClassnames.rounded = '';
      return;
    }

    this.#buttonClassnames.rounded = 'btn-rounded';
  }
}
