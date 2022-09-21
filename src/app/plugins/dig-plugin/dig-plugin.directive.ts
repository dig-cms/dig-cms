import {Directive, EmbeddedViewRef, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {NgIfContext} from "@angular/common";

export enum DigPluginScope {
  /**
   * Plugins that use the same data regardless of where they are used
   */
  global = 'GLOBAL',
  /**
   * Plugins that are relative to the current `page/path`
   */
  page = 'PAGE'
};

@Directive({
  selector: '[digPlugin]'
})
export class DigPluginDirective<T = unknown> {
  private _context: DigPluginContext<T> = new DigPluginContext<T>();
  /**
   * Optional plugin scope
   *
   * You can use one of the predetermined scope options `DigPluginScope`
   * or create your own scopes by passing any string
   *
   * Defaults to the `DigPluginScope.global`
   */
  @Input() scope!: DigPluginScope | string;
  private _thenTemplateRef: TemplateRef<DigPluginContext<T>>|null = null;
  private _thenViewRef: EmbeddedViewRef<DigPluginContext<T>>|null = null;

  constructor(private _viewContainer: ViewContainerRef, templateRef: TemplateRef<DigPluginContext<T>>) {
    this._thenTemplateRef = templateRef;
  }

  @Input()
  set digPlugin(form: T) {
    this._context.$implicit = this._context.digPlugin = form;
    this._updateView();
  }

  private _updateView() {
    this._viewContainer.clear();
    if (!this._thenViewRef) {
      this._viewContainer.clear();
      if (this._thenTemplateRef) {
        this._thenViewRef =
          this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context);
      }
    }

    // if (this._context.$implicit) {
    //   if (!this._thenViewRef) {
    //     this._viewContainer.clear();
    //     this._elseViewRef = null;
    //     if (this._thenTemplateRef) {
    //       this._thenViewRef =
    //         this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context);
    //     }
    //   }
    // } else {
    //   if (!this._elseViewRef) {
    //     this._viewContainer.clear();
    //     this._thenViewRef = null;
    //     if (this._elseTemplateRef) {
    //       this._elseViewRef =
    //         this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context);
    //     }
    //   }
    // }
  }
}

/**
 * @publicApi
 */
export class DigPluginContext<T = unknown> {
  public $implicit: T = null!;
  public digPlugin: T = null!;
}
