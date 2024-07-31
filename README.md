# List로 살펴보는 함수형 프로그래밍  

**TypeScript**로 **List**를 **Object-Oriented**, **Functional** 형식으로 구현해보고 차이점을 확인합니다.  

**TypeScript**를 **Javascript**로 빌드하지 않고 `Jest`를 이용해서 테스트를 통과하는지만 확인하겠습니다.    

## 개발 환경

예제를 구현한 환경은 아래와 같습니다.  

- `Node`: v20.15.1 
- `npm`: 10.7.0

## 개발 환경 준비  

처음부터 직접 수행해보고 싶으신 분들을 위해 개발 환경을 어떻게 구성하였는지 남깁니다.  

`Node`와 `npm`은 준비되어있다고 가정하겠습니다.  

### `package.json` 초기화  

```shell
npm init -y
```

위 명령을 통해 `Node` 개발 환경을 위한 `package.json`을 초기화 할 수 있습니다.  

```json
{
  "name": "ts-functional-list",
  "version": "1.0.0",
  "description": "**Typescript**로 **List**를 각각 **Object-Oriented**, **Functional** 형식으로 구현해보고 차이점을 확인합니다.",
  "main": "main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

`-y` 옵션을 사용하면 디렉터리의 상태에 맞추어 `package.json` 파일을 만들어줍니다.  

관련 옵션들을 직접 선택하고 싶으시다면 `-y` 옵션을 빼고 사용해주세요.  

### 패키지 설치  

개발 환경에 `TypeScript`와 `Jest`, `TypeScript`용 `Jest`를 설치합니다.  

```shell
npm install --save-dev typescript jest @types/jest ts-jest
```  

### TypeScript 설정  

`TypeScript` 설정 파일을 아래 명령으로 생성해줍니다.  

```shell
tsc --init
```

많은 설정 옵션들이 있을텐데 저는 필요한 항목들을 남기고 제거하겠습니다.  

```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

### Jest 설정  

아래 명령을 사용하여 Jest 기본 설정 파일을 생성합니다.  

```shell
npx jest --init   
mkdir test
```

몇 가지 물어보는데 저는 아래처럼 했습니다.(특별한 이유는 없어요)  

```shell
The following questions will help Jest to create a suitable configuration for your project

✔ Would you like to use Jest when running "test" script in "package.json"? … yes
✔ Would you like to use Typescript for the configuration file? … yes
✔ Choose the test environment that will be used for testing › node
✔ Do you want Jest to add coverage reports? … yes
✔ Which provider should be used to instrument code for coverage? › babel
✔ Automatically clear mock calls, instances, contexts and results before every test? … yes

✏️  Modified /Users/mario/Desktop/study/ts-functional-list/package.json

📝  Configuration file created at /ts-functional-list/jest.config.ts
```

명령이 잘 수행되었으면 `jest.config.ts` 파일이 생성되어있을거에요.

문답에 따라 몇몇 설정들을 활성화해주는데, 기본 설정으로도 충분히 처리되므로 안만드시거나 모두 `n`으로 하셔도 괜찮습니다.  


### `package.json` 설정 추가  

테스트 실행할 스크립트를 위해 `package.json` 파일을 일부 수정했습니다.  

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch"
  }
}
```

위 코드를 `package.json`에 추가해주세요.    

참고로 `--watch` 옵션은 코드 변경 사항이 있을때마다 자동으로 테스트를 다시 돌려주는 옵션입니다.  

### 디렉터리 생성  

코드들과 테스트 코드들이 담길 디렉터리를 생성하는 것으로 마무리 해줍니다.  

```shell
mkdir src tests
```

디렉터리 구조가 아래와 같이 나왔다면 잘 따라오신겁니다😁

```shell
내-디렉터리
├── node_modules
├── src
├── tests
├── jest.config.js
├── package.json
└── tsconfig.json
```

## 끝으로  

코드 설명은 블로그에 남기도록 하겠습니다.  

끝까지 읽어주셔서 감사합니다.  