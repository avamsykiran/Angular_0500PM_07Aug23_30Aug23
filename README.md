Angular 16
-----------------------------------------------------------------------------------------------

    Pre-Requite

        HTML 5
            Typography, tables, lists, links graphics, form elements and form validation attribues
            html 5 api

        CSS 3
            css proeprties including box model and responsive design
            CSS Selectors and Selector Operators

        JavaScript (ES6)
            Standard JS objects like String, Math, Date ..et.,
            DOM and BOM like window,location, document
            ES6 concepts like JSON, spread operator, template literals, modules ..et.,
            Asynchronous programming like async, await, and Promise.

        Bootstrap 5 (optional)

    Lab Setup

        NodeJS
        VSCode
        Angular CLI
        Chrome

    What?

        Angular is javascript framework and is used to develop SPA.

        SPA- Single Page Application

        SPA uses webService (rest - api) for data operations on the server.

    Why NodeJS?

        NodeJS is used like a development platform but not like a runtime for the UI-application.

        As part of the development process, we need to compose, compile, test, buuild, package and deploy.
        All thuis happens on the developer machine. And we need tools for compiling, tools for testing, tools for building, tools for packaging ...etc., and for those tools to run we use NodeJS.

        Angular 2 to Angular 16 - these are typescript based and the typescript must be transpelled (compiled) into
        javascript as the browser does not understand typescript.

    Why typescript?

        typescript is a product miscrosoft and is a kind of extension to javascript.

        Javascript is dynamically types and hence is not a strongly typed language. This leaves a lot of space
        for runtime debugging. 

        Typescript      =       JavaScript  + Strong DataTypes.

        Employee.js

            class Employee {
                constructor(empId,name,salary){
                    this.empId=empId;
                    this.name=name;
                    this.saklary=salary;
                }

                ta(){
                    return this.salary*0.10;
                }
            }

        Employee.ts

            class Employee {
                private empId:number;
                private name:string;
                private salary:number;

                public constructor(empId:number,name:string,salary:number){
                    this.empId=empId;
                    this.name=name;
                    this.saklary=salary;
                }

                public ta():number{
                    return this.salary*0.10;
                }
            }

    Angular CLI
    
        is a frontier of commands / command line interface / provided by the angualr team for smooth opertions on an angular app.

        ng version

        ng new app1

        cd app1

        ng serve                    compiles and builds the spa-bundle and hsots it on a local web server @ 4200 port
        ng serve --port 8888 -o     compiles and builds the spa-bundle and hsots it on a local web server @ 8888 port
                                    and luanches the app on the browser

        ng build                    compiles and builds the spa-bundle and writes the bundle into 'dist' folder
        ng test                     compiles and builds the spa-bundle and execute all the test cases

        ng generate component ComponentName

        ng g module ModuleName
        ng g component ComponentName --skip-tests
        ng g c ComponentName --skip-tests
        ng g directive DirectiveNAme --skip-tests
        ng g pipe PipeName --skip-tests
        ng g service ServiceName --skip-tests
        ng g class ClassName --skip-tests
        ng g interface InterfaceName
        ...etc.,

    
    Angular Architecture

        1. An application is made up of a few resource and each resource is a typescript class.
        2. Each of thee classes are marked with a DECORATOR to specify the role of the class / the type of the resource.
        3. Every resource might need some configuration, and the configuration is called META-DATA, The META-DATA is formed 
            into a json-object and is passed into the DECORATOR.

            Module
                @NgModule({
                    declarations:[],
                    imports:[],
                    providers:[],
                    bootstrap:[],
                    exports:[]
                })
                export class SalesModule {}

            Component
                @Component({
                    selector:"dashboard",
                    templateUrl:"dashboard.template.html",
                    styleUrls:[]
                })
                export class DashboardComponent {}

            Directive
                @Directive({
                    selector:"[highlight]"
                })
                export class HighLighterDirective {}

            Pipe
                @Pipe({
                    name:"into-words"
                })
                export class IntoWordsPipe {}

            Service
                @Injectable({
                    providedIn:'root'
                })
                export class EmployeeService {}

    Angular Module
            
        1. An angular module lives along with the Javascript/TypeScript modules.
        2. An angular module houses a list components, directives , pipes ..etc., as one single logicla unit of loading.
        3. Each angular app must have one top-level module called the "ROOT MODULE", generally the ROOTM MODULE is named as    
            "AppModule"
        4. Allk other modules are called "FEATURE MODULES"  
            
                @NgModule({
                    declarations:[],
                    imports:[],
                    providers:[],
                    bootstrap:[],
                    exports:[]
                })
                export class SalesModule {}


        declarations:[]     is a list of components, pipes and directive that belong to the current module
        imports:[],         is a list of other modules we wish import into the current module
        providers:[],       is a list of services that belong to the current module
        bootstrap:[],       is a list of components that belong to the current module and are to be immidiatly rendered on the 
                            screen. This property must be used only on ROOT MODULE.
        exports:[]          is a list of components, pipes and directive that belong to the current module, and that
                            are being allowed to used in other modules. This proeprty is not supposed to be used in ROOT MODULE

    Angular Component

        1. Angular has a feature called html-extendability, it means that we can create 
            our own html-elements and our own html-attributes
        2.The html-elements created in angular are called components.


                Component       =       STYLE       +       PRESENTATION (template)        +   STATE and BEHAVIOUR (class)
                                    xyz.component.css       xyz.component.html                      xyz.component.ts

                dashboard.component.ts
                -------------------------
                @Component({
                    selector:"dashboard",
                    templateUrl:"dashboard.template.html",
                    styleUrls:["dashboard.component.css"]
                })
                export class DashboardComponent {
                    //fields needed to rememebr the state
                    //constructor
                    //methods to handle events
                }

                <dashboard></dashboard>

    Data Binding

        used to access the fields and methods of the component class in the component template.

        Interpolation

            will render the value of a angular expression inside the DOM.

            {{angularExpression}} 

        Two-Way Data Binding

            is used to bind a field with an input-element.
            "ngModel" directive from FormsModule of "@angular/forms" is used for two-way data binding.

            <input [(ngModel)]="fieldName" />

        One-Way Data Binding
            Attribute Binding

                to bind a filed with an attribute of an element.

                <tagNAme [attribute]="field"> </tagName>

            Event Binding

                to bind a method to an event-directive. so that the method gets invoked when that event occurs.

                event-directives:
                    click,dblclick,mouseover,mouseleave,keyup,keydown,
                    focus,blur,change,ngSubmit ...etc.,

                <tagName (ever-directive)="method()"> </tagName>

            Style Binding
                is used to bind a field to a css-property
                <tagName ([style.cssProperty]="field"> </tagName>

            Css Class Binding
                is sued to bind a boolean field to a class, so that the class cna be on/off with the boolean field.

                <tagName [class.className]="booleanField"> </tagName>

    Angular Pipes

        a pipe is used to transform any data into another.

        {{anyValueOrVariableOrExpression|pipe-name}}

        in-built pipes
            uppercase
            lowercase
            titlecase
            number
            currency
            percent
            date
            async
            json

        custom pipes

            @Pipe({
                name:"into-words"
            })
            export class IntoWordsPipe implements PipeTransform {
                trnaform(value:any):any{
                    return tranformedValue;
                }
            }

    Integrating Bootstrap

        npm i bootstrap --save

        node_modules/bootstrap/dist/css/bootstrap.min.css
        node_modules/bootstrap/dist/js/bootstrap.min.js

        angular.json
            |- styles       include the .css
            |- scripts      include the .js

    
    Angular Directives

        Component Directives / Components
            are the angular based html-elements.

        Attribute Directive
            are the angular based html-attributes.

            structural 

                *ngIf
                *ngFor
                *ngSwitch

            in-built

                ngModel, click,dblclick,blur,focus,chagne,ngSubmit, ....etc.,

            custome

                @Directive({
                    selector:"[highlight]"
                })
                export class HighLighterDirective {}

    Angular Services

        a service is sued to offer bussiness logic like computations or rest-api communication ...etc.,

        the angular depends on a injector system to inject the services across the application where ever they are asked for.

        top-level-module (ROOT MODULE)
                    app.module                      root-injector
                        |
                        |-app.component             app component injector
                        |-login.component           login component injector
                        |-sales.module              sales module injector
                            |-dashboar.component
                            |-shoppingCart.component        and so on.........
                        |-inventory-module
                            |-stock.component

        eevery component, directive, module or pipe have 'providers:[]' in their meta-data.
        if a servikce is mentioned in that array, the service object is then created at that injector level.

                @Injectable({
                    providedIn:'root'
                })
                export class EmployeeService {}

    Angular Routing

        RouterModule        from '@angular/router'

            Route           {
                                path:'',
                                component:'',
                                redirect:'',
                                pathMatch:'startsWith|full',
                                children:[],
                                canActive:[],
                                canDeactive:[],
                                canLoad:[],
                                canChildActive:[]
                            }

            Routes          Route[]

            router-outlet   is a component. it is used reserve space in the top-level component for the active component
                            as per the current url to appear.

            routerLink      is a attribute directive to be used instead of 'href' on a '<a></a>' elements.

            routeLinkActive is also a attribute directive for <a></a>, this takes a css-class and applies that class
                            on the <a></a> whenever it is active (this is the current path)

            Router          is a service that offers navigate and navigateByUrl methods to nagivate programatically.

            ActivatedRouter is a service that provides access to the data appended on the router like url-params or path-0params..

    Angular Forms

        Template Driven Forms

            basically the form is designed in the template compeltly and is boudn to the fields
            of the component class through two-way databinding via 'ngModel' from ForsmModule

            this form supports html5 validation attributes. (but unfortunatly a few are not like min,max wont work).

            these forms can not be sued to handle complicated senarios like nested forms ...etc.,

            these formes are hard to test as 100% of it iswritten in html, they do not have any link in the typescript.

        Model Driven Forms / Reactive Forms

            these forms are modeled in the component class using FormControl,FormGroup and formBuilders
            from ReactiveFormModule.

            The modeled form is attached to a form skeleton in the template using
            formControlName directive.

            thes support all html5 validation attributes and custome validation attributes can also be dsigned.

            these forms can be tested more easily when compared to thier counter-part.

            these forms also support complicated senarios.