<br/>
<p align="center">
  <a href="https://github.com/PixelSavvy/tbc_project_giorgi_menabdishvili">
    <img src="https://static.wixstatic.com/media/93e8a3_03d83d668a5f417ca646a5e511f8c02a%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/93e8a3_03d83d668a5f417ca646a5e511f8c02a%7Emv2.png" alt="Logo" width="80" height="80">
  
  </a>

  <h3 align="center">TBC x USAID-ის გვერდი</h3>

  <p align="center">
    პროექტის აღწერა
</p>

## სარჩევი
* [პროექტის შესახებ](#პროექტის-შესახებ)
* [გამოყენებული ინსტრუმენტები](#გამოყენებული-ინსტრუმენტები)
* [პროექტის სტრუქტურა](#პროექტის-სტრუქტურა)
* [დასაწყისი](#დასაწყისი)
  * [პრერექვიზიტები](#prerequisites)
  * [ინსტალაცია](#installation)
* [გამოყენება](#usage)

## პროექტის შესახებ

![Screen Shot](images/screenshot.png)

პროექტი მიზნად ისახავდა TBC x USAID მთავარი გვერდის კლონის აწყობას HTML,CSS და Javascript-ის გამოყენებით. მთავარი მიზნის მისაღწევად, დასახული იყო შემდეგი პუქნტები:
1. გვერდის ძირითადი დიზაინ სისტემის გადმოღება - ფერები, ტიფოგრაფია და ა.შ.
2. გვერდი უნდა იყოს responsive საუკეთესო პრაქტიკების გამოყენებით.
3. დინამიური კომპონენტები - კარუსელი, აკორდიონი და მობილური ნავიგაცია, აუცილებლად უნდა ფუნქციონირებდეს. სასურველია, მაქსიმალურად არ იყოს გამოყენებული ჯავასკრიპტის დამატებითი ბიბლიოტეკები თუ ფრეიმვორკი.

## გამოყენებული ინსტრუმენტები

გვერდის ასაწყობად ჩემ მიერ გამოყენებული იყო შემდეგი ინსტრუმენტები:
[1] Vite - პროექტის მთავარი სტრუქტურის და საჭირო ბიბლიოთეკების დასაყენებლად. აგრეთვე development და production გარემობის მხარდაჭერა.
[2] SCSS - სტილების საბაზისო დიზაინ სისტემის შესაქმნელად და უფრო ფუნქციონალური კოდისთვის (mixins, maps, variables).
[3] Typescript - ჯავსკრიპტის თაიფების დასაცავად, რათა თავიდან ამეცილა სავარაუდო ტიპური კონფლიქტები ჯავასკრიპტის runtime-ში.
[4] Prettier - არსებული codebase-ის ერთ სტილზე დასაყანად. 
[5] Autoprefixer - სხვადსხვა ბრაუზერში სწორი რენდერინგის მხარდასაჭერად.

## პროექტის სტრუქტურა

<img width="404" alt="image" src="https://github.com/PixelSavvy/tbc_project_giorgi_menabdishvili/assets/142541220/394fe7a4-7629-4bd9-b400-6c805e22fbfc">

## დაწყება

### პრერექვიზიტები

* npm

npm install npm@latest -g

### ინსტალაცია

1. რიპოზიტორიის კლონირება

```sh
git clone [https://github.com/your_username_/Project-Name.git](https://github.com/PixelSavvy/tbc_project_giorgi_menabdishvili.git)
```

2. npm პაკეტების დაყენება

```sh
npm install
```


## გამოყენება

1. developer-ის სერვერის დასაწყებად ლოკალურ ჰოსტზე

```sh
npm run dev
```

2. production ფაილების შესაქმნელად

```sh
npm run build
```

3. კოდის ფორმატირება

```sh
npm run prettier
```



