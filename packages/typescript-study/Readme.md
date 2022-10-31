#TypeScript

## Typescript ?

MS에 의해 개발/관리되고 있는 오픈소스 프로그래밍 언어
대규모 어플리케이션을 개발하는데 Javascript가 어렵고 불편하다는 불만에 대응하기 위해 개발되었다.
Typescript는 스크립트 언어의 표준인 ECMA Script의 표준을 따르기 때문에 Javascript 영역을 침범하지 않고 최신 ES를 지원한다.

### TypeScript의 특징
가장 큰 특징은 Type을 지정하는 것으로 TypeScript = JavaScript + Type 으로 볼 수 있다.

JS에 없는 타입이 지원되면서 장점이 생긴다.

1. Type이 추가되어 안정성 확보
2. Type에 대한 예외 처리를 하지 않아도 된다. (오버헤드 감소)
3. JavaScript 엔진의 최적화를 돕는다.
- 컴파일 언어, 정적 타입의 언어이다.

```javascript
{
  "compilerOptions": {
    "target": "esnext",          // 컴파일된 코드가 어떤 환경에서 실행될 지 정의한다.
    "module": "exnext",         // 컴파일된 코드가 어떤 모듈 시스템을 사용할지 정의한다.
    "strict": true,             // 모든 타입 체킹 옵션을 활성화한다는 것을 의미한다.
//    "esModuleInterop": true,  // CommonJS 모듈 형태로 이루어진 파일을 es2015 모듈 형태로 불러올 수 있게 해준다.
    "outDir": "./dist"          // 컴파일된 파일들이 저장되는 경로를 지정할 수 있다.
  }
}
```