```html
<dig-plugin #myPlugin path="global/welcome">
  <dig-plugin-form [formGroup]="pluginForm">
    <input formControlName="displayName">
  </dig-plugin-form>
  <dig-plugin-template>
    <h1>Hello {{myPlugin.data.displayName}}</h1>
  </dig-plugin-template>
</dig-plugin>
```


```typescript
@Component({
  selector: 'app-greeting',
  template: `
  <dig-plugin *digPlugin="uid; let data" [formGroup]="pluginForm">
    <dig-plugin-form>
      <input formControlName="displayName">
    </dig-plugin-form>
    <dig-plugin-template>
      <h1>Hello {{data.displayName}}</h1>
    </dig-plugin-template>
  </dig-plugin>
  `
})
export class Greeting {
    @Input() path!: string;
}
```

```html
<!-- usage -->
<app-greeting path="global/welcome"></app-greeting>
```


