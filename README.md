# WebApp Final Project - Animal Cloud Adoption (動物雲認養)

![logo](https://github.com/angel870326/animal-cloud-adoption/blob/main/frontend/public/logo.png)

## File Structure

Within the download you'll find the following directories and files:

```
animal-cloud-adoption
 ┣ backend
 ┃ ┣ src
 ┃ ┃ ┣ main
 ┃ ┃ ┃ ┣ java
 ┃ ┃ ┃ ┃ ┗ com
 ┃ ┃ ┃ ┃ ┃ ┗ example
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ component
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ SendMail.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ UpdateDonateRecordStatus.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ AccountInfoController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ AccountInfoUpdateController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ AdoptAnimalController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ AdopterInfoController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ AdopterListController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ AnimalInfoController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ AnimalListController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ IndexController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ LoginController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ RegisterController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ ShelterInfoController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ ShelterListController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ form
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ AddDonationForm.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ LoginForm.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ RegisterForm.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ UpdateMemberInfoForm.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ model
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ Animal.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ DonatePlan.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ DonateRecord.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ Member.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ Shelter.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ repository
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ AnimalRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ DonatePlanRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ DonateRecordRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ MemberRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ ShelterRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ WebApplication.java
 ┃ ┃ ┃ ┗  resources
 ┃ ┃ ┃ ┃ ┣ database_csv
 ┃ ┃ ┃ ┃ ┃ ┣ animal_view.csv
 ┃ ┃ ┃ ┃ ┃ ┣ donate_plan_view.csv
 ┃ ┃ ┃ ┃ ┃ ┣ donate_record_view.csv
 ┃ ┃ ┃ ┃ ┃ ┣ member_view.csv
 ┃ ┃ ┃ ┃ ┃ ┗ shelter_view.csv
 ┃ ┃ ┃ ┃ ┗ application.properties
 ┃ ┃ ┣ test
 ┃ ┃ ┃ ┗ java
 ┃ ┃ ┃ ┃ ┗ com
 ┃ ┃ ┃ ┃ ┃ ┗ example
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ WebApplicationTests.java
 ┃ ┣ target
 ┃ ┃ ┣ classes
 ┃ ┃ ┃ ┣ com
 ┃ ┃ ┃ ┃ ┗ example
 ┃ ┃ ┃ ┃ ┃ ┣ component
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ SendMail.class
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ UpdateDonateRecordStatus.class
 ┃ ┃ ┃ ┃ ┃ ┣ controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ AccountInfoController.class
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ AccountInfoUpdateController.class
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ AdoptAnimalController.class
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ AdopterInfoController.class
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ AdopterListController.class
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ AnimalInfoController.class
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ AnimalListController.class
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ IndexController.class
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ LoginController.class
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ RegisterController.class
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ ShelterInfoController.class
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ ShelterListController.class
 ┃ ┃ ┃ ┃ ┃ ┣ form
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ AddDonationForm.class
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ LoginForm.class
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ RegisterForm.class
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ UpdateMemberInfoForm.class
 ┃ ┃ ┃ ┃ ┃ ┣ model
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ Animal.class
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ DonatePlan.class
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ DonateRecord.class
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ Member.class
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ Shelter.class
 ┃ ┃ ┃ ┃ ┃ ┣ repository
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ AnimalRepository.class
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ DonatePlanRepository.class
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ DonateRecordRepository.class
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ MemberRepository.class
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ ShelterRepository.class
 ┃ ┃ ┃ ┃ ┃ ┗ WebApplication.class
 ┃ ┃ ┃ ┣ database_csv
 ┃ ┃ ┃ ┃ ┣ animal_view.csv
 ┃ ┃ ┃ ┃ ┣ donate_plan_view.csv
 ┃ ┃ ┃ ┃ ┣ donate_record_view.csv
 ┃ ┃ ┃ ┃ ┣ member_view.csv
 ┃ ┃ ┃ ┃ ┗ shelter_view.csv
 ┃ ┃ ┃ ┗ application.properties
 ┃ ┃ ┣ generated-sources
 ┃ ┃ ┃ ┗ annotations
 ┃ ┃ ┣ generated-test-sources
 ┃ ┃ ┃ ┗ test-annotations
 ┃ ┃ ┣ maven-status
 ┃ ┃ ┃ ┗ maven-compiler-plugin
 ┃ ┃ ┃ ┃ ┣ compile
 ┃ ┃ ┃ ┃ ┃ ┗ default-compile
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ createdFiles.lst
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ inputFiles.lst
 ┃ ┃ ┃ ┃ ┗ testCompile
 ┃ ┃ ┃ ┃ ┃ ┗ default-testCompile
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ createdFiles.lst
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ inputFiles.lst
 ┃ ┃ ┗ test-classes
 ┃ ┃ ┃ ┗ com
 ┃ ┃ ┃ ┃ ┗ example
 ┃ ┃ ┃ ┃ ┃ ┗ WebApplicationTests.class
 ┃ ┗ pom.xml
 ┣ frontend
 ┃ ┣ components
 ┃ ┃ ┣ AccountPage
 ┃ ┃ ┃ ┣ AccountAnimalInfo.jsx
 ┃ ┃ ┃ ┣ AccountInfo.jsx
 ┃ ┃ ┃ ┗ AccountInfoEdit.jsx
 ┃ ┃ ┣ AdopterInfoPage
 ┃ ┃ ┃ ┣ AdopterAnimalInfo.jsx
 ┃ ┃ ┃ ┗ AdopterInfo.jsx
 ┃ ┃ ┣ AdopterListPage
 ┃ ┃ ┃ ┣ AdopterAnimalList.jsx
 ┃ ┃ ┃ ┗ AdopterList.jsx
 ┃ ┃ ┣ AnimalInfoPage
 ┃ ┃ ┃ ┣ AdoptRecord.jsx
 ┃ ┃ ┃ ┣ AniInfo.jsx
 ┃ ┃ ┃ ┣ JoinBtns.jsx
 ┃ ┃ ┃ ┗ OtherAdopters.jsx
 ┃ ┃ ┣ AnimalListPage
 ┃ ┃ ┃ ┣ AniCard.jsx
 ┃ ┃ ┃ ┣ AnimalListPage.jsx
 ┃ ┃ ┃ ┣ SearchCond.jsx
 ┃ ┃ ┃ ┗ SearchRes.jsx
 ┃ ┃ ┣ AuthPage
 ┃ ┃ ┃ ┣ LoginForm.jsx
 ┃ ┃ ┃ ┣ LoginRegisterRequest.jsx
 ┃ ┃ ┃ ┗ RegisterForm.jsx
 ┃ ┃ ┣ FaqPage
 ┃ ┃ ┃ ┣ Data.jsx
 ┃ ┃ ┃ ┗ FaqPage.jsx
 ┃ ┃ ┣ Header
 ┃ ┃ ┃ ┣ DrawerLinks.jsx
 ┃ ┃ ┃ ┣ Header.jsx
 ┃ ┃ ┃ ┗ HeaderLinks.jsx
 ┃ ┃ ┣ HomePage
 ┃ ┃ ┃ ┣ AboutUs.jsx
 ┃ ┃ ┃ ┣ CustomCountUp.jsx
 ┃ ┃ ┃ ┣ HomeAdopter.jsx
 ┃ ┃ ┃ ┣ HomeAnimal.jsx
 ┃ ┃ ┃ ┣ HomeSectionLayout.jsx
 ┃ ┃ ┃ ┣ HomeShelter.jsx
 ┃ ┃ ┃ ┗ ImageContent.jsx
 ┃ ┃ ┣ PlanPage
 ┃ ┃ ┃ ┣ ExtendPlan.jsx
 ┃ ┃ ┃ ┗ JoinPlan.jsx
 ┃ ┃ ┣ ShelterInfoPage
 ┃ ┃ ┃ ┣ SheAniList.jsx
 ┃ ┃ ┃ ┣ SheName.jsx
 ┃ ┃ ┃ ┗ ShelterInfoPage.jsx
 ┃ ┃ ┣ ShelterListPage
 ┃ ┃ ┃ ┣ SearchCond.jsx
 ┃ ┃ ┃ ┣ SearchRes.jsx
 ┃ ┃ ┃ ┣ SheCard.jsx
 ┃ ┃ ┃ ┗ ShelterListPage.jsx
 ┃ ┃ ┣ Footer.jsx
 ┃ ┃ ┗ Layout.jsx
 ┃ ┣ pages
 ┃ ┃ ┣ account
 ┃ ┃ ┃ ┗ edit.jsx
 ┃ ┃ ┣ adopters
 ┃ ┃ ┃ ┗ adoptersInfo.jsx
 ┃ ┃ ┣ animals
 ┃ ┃ ┃ ┣ animalsInfo.jsx
 ┃ ┃ ┃ ┣ extendAdopt.jsx
 ┃ ┃ ┃ ┗ joinAdopt.jsx
 ┃ ┃ ┣ auth
 ┃ ┃ ┃ ┣ login.jsx
 ┃ ┃ ┃ ┗ register.jsx
 ┃ ┃ ┣ shelters
 ┃ ┃ ┃ ┗ sheltersInfo.jsx
 ┃ ┃ ┣ _app.jsx
 ┃ ┃ ┣ _document.jsx
 ┃ ┃ ┣ account.jsx
 ┃ ┃ ┣ adopters.jsx
 ┃ ┃ ┣ animals.jsx
 ┃ ┃ ┣ faq.jsx
 ┃ ┃ ┣ index.jsx
 ┃ ┃ ┗ shelters.jsx
 ┃ ┣ public
 ┃ ┃ ┣ animals
 ┃ ┃ ┃ ┣ 1.jpg
 ┃ ┃ ┃ ┣ ...
 ┃ ┃ ┃ ┗  100.jpg
 ┃ ┃ ┣ bg.jpg
 ┃ ┃ ┣ favicon.ico
 ┃ ┃ ┗ logo.png
 ┃ ┣ services
 ┃ ┃ ┗ auth.jsx
 ┃ ┣ styles
 ┃ ┃ ┣ jss
 ┃ ┃ ┃ ┣ components
 ┃ ┃ ┃ ┃ ┣ AccountPage
 ┃ ┃ ┃ ┃ ┃ ┗ accountInfoStyle.js
 ┃ ┃ ┃ ┃ ┣ AdopterListPage
 ┃ ┃ ┃ ┃ ┃ ┗ adopterListStyle.js
 ┃ ┃ ┃ ┃ ┣ FaqPage
 ┃ ┃ ┃ ┃ ┃ ┗ faqStyle.js
 ┃ ┃ ┃ ┃ ┣ Header
 ┃ ┃ ┃ ┃ ┃ ┣ drawerLinksStyle.js
 ┃ ┃ ┃ ┃ ┃ ┣ headerLinksStyle.js
 ┃ ┃ ┃ ┃ ┃ ┗ headerStyle.js
 ┃ ┃ ┃ ┃ ┣ HomePage
 ┃ ┃ ┃ ┃ ┃ ┣ aboutUsStyle.js
 ┃ ┃ ┃ ┃ ┃ ┣ homeStyle.js
 ┃ ┃ ┃ ┃ ┃ ┗ imageContentStyle.js
 ┃ ┃ ┃ ┃ ┗ footerStyle.js
 ┃ ┃ ┃ ┗ animal-cloud-adoption.js
 ┃ ┃ ┗ Home.module.css
 ┃ ┣ .eslintrc.json
 ┃ ┣ .gitignore
 ┃ ┣ .prettierignore
 ┃ ┣ .prettierrc.json
 ┃ ┣ jsconfig.json
 ┃ ┣ Makefile
 ┃ ┣ next.config.js
 ┃ ┣ package.json
 ┃ ┗ yarn.lock
 ┣ .gitignore
 ┗ README.md
```


## Setup & Run

### Clone the repository in VSCode
https://github.com/angel870326/animal-cloud-adoption.git

### Frontend

#### Frontend Setup (in new terminal)
1. Change directory to ```animal-cloud-adoption/frontend```
```
cd ./frontend
```
2. Install
```
make install
``` 
or
```
yarn install
``` 

#### Frontend Developing Server (in terminal)
```
make
```
or
```
yarn dev
```


### Backend

#### Database Setup
1. Install
Install MySQL 8.0.33 (https://dev.mysql.com/downloads/installer/)
2. Start MySQL server
3. Create database and user
4. Create table
Refer to ```animal-cloud-adoption/backend/src/main/java/com/example/model``` for the name and data type of the columns in each table
Import tuples from csv files in ```animal-cloud-adoption/backend/src/main/resources/database_csv```

#### Account Setup (in new terminal)
1. Open ```animal-cloud-adoption/backend/src/main/resources/application.properties```
```
open ./backend/src/main/resources/application.properties
```
2. Fill in your port, username, password, and etc. of database and mail
```
${db_xxx:<your_db_settings>}
```
```
${mail_xxx:<your_mail_settings>}
```

#### Backend Setup
Install Java OpenJDK 17.0.7 (https://learn.microsoft.com/en-us/java/openjdk/download#openjdk-17)

#### Backend Server (in new terminal)
1. Change directory to ```animal-cloud-adoption/backend```
```
cd ./backend
```
2. Run server
```
mvn spring-boot:run
```
