# 멋쟁이 사자처럼 10기 FE 4주차 과제 🦁

반갑습니다 여러분!!☺️ 
벌써 react의 정말 재밌는! 필수적인 요소인 hooks를 다뤄보는 시간입니다!

# 실습 1번문제
 InputSample 컴포넌트는 name과 nickname을 입력받아서 render시키는 컴포넌트 입니다. 해당 기능을 수행하기 위해 주석이 있는 부분을 채워 기능을 완성시켜 봅시다<br> 
 ![image](https://user-images.githubusercontent.com/77886826/167911379-d2877351-6507-4c26-8b49-fbb647980b0d.png)<br> 
 ![image](https://user-images.githubusercontent.com/77886826/167911449-35a018d5-8405-42d2-ad4c-56e88af3a5e8.png)<br> 

주석을 채워서 name과 nickname 을 입력받아 봅시다!
해당하는 페이지는 /component/input 페이지 입니다.
 
ex) <br>
![image](https://user-images.githubusercontent.com/77886826/167907952-0b89c5e1-db78-40c0-90f6-8e2ee8b54d88.png)
<br>
현재 상태입니다.<br>

https://user-images.githubusercontent.com/77886826/167908055-e3287bcf-5176-4188-8222-0773abc215d5.mov

### 해결방안
```JavaScript

function InputSample() {
  const[name, setName] = useState("");
  const[nickname, setNickname] = useState("");
  const onChange1 = (e) => {
    console.log(e.target.value); 
    setName(e.target.value);
  };

  const onChange2 = (e) => {
    console.log(e.target.value); 
    setNickname(e.target.value);
  };

  const onReset = () => {
    setName("")
    setNickname("")
  };

  return (
    <div>
      <InputWrapper>
        <input
          name="name"
          placeholder="이름"
          onChange={onChange1}
        />
        <input
          name="nickname"
          placeholder="닉네임"
          onChange={onChange2}
          
        />
        <button onClick={onReset}>초기화</button>
      </InputWrapper>

      <ViewWrapper>
        값 : {name === '' ? "이름이 없습니다." :  name} 
        ({nickname === '' ? "별명이 없습니다." : nickname})
        </ViewWrapper>

    </div>
  );
}

export default InputSample;

# 이름에는 이름값을, 닉네임에는 닉네임 값을 집어넣는 코드를 작성해야 합니다.
<br>
리액트에서는 함수형 컴포넌트에서도 상태를 관리할 수 있게 되었습니다. UseState라는 함수를 이용하여 컴포넌트에서 바뀌는 값을 관리할 수 있게 되었습니다.
name과 nickname값을 변수로 받습니다. 여기서 onChange1 은 name의 값을, onChange2는 nickname의 값을 세팅하는 함수입니다.
onchange는 이벤트의 한 종류로서 이벤트 객체 e를 피라미터로 받아와서 사용하게 되는데 이 객체의 e.target은 이벤트가 발생한 input의 value값
즉 e.target.value를 조회하면 현재 input에 입력한 값이 무엇인지 알 수 있게 해줍니다.

여기서는 name과 nickname값을 알 수 있는 것이죠. 여기서 나온 값을 useState에서 관리를 해주는 것입니다.
onClick={onReset}은 버튼을 누르게 되면 0으로 초기화 해주는 함수입니다.

한편 값을 넣지 않았을 때에는 삼항연산자를 이용하였습니다.
```JavaScript
값 : {name === '' ? "이름이 없습니다." :  name} 
        ({nickname === '' ? "별명이 없습니다." : nickname})
```


https://user-images.githubusercontent.com/103018984/174475573-dde0e16b-457a-4974-b20a-869640647949.mov


# 실습 2번문제
우리를 아주 거슬리게 하는 경고가 있습니다...ㅠ

![image](https://user-images.githubusercontent.com/77886826/167908932-02e6913b-02e6-4774-8939-43125eb32082.png)
![image](https://user-images.githubusercontent.com/77886826/167909006-f5dfa5c9-b7b2-49c9-a71f-16db78a9dd4f.png)
경고를 직접 읽어보시고 문제를 해결해주세요!! 해당 오류를 읽어보면 useEffect의 deps에 count가 없다고 하는데 과연...?!

### 제한조건 

 - 해당 문제는 useState 와 useEffect를 모두 사용해야 합니다.
 - useEffect의 deps에 해당하는 부분에서 eslint를 무시하는 방법은 사용하면 안됩니다.

```JavaScript
const Problem = () => {
  const [count, setCount] = useState(0);
  const [isClick, setIsClick] = useState(false);

  useEffect(() => {
    setCount((state) => state +1); 
  }, [isClick]);                  
```
#setCount(count +1)을 해버리면 useEffect에 count를 해버릴 수 없게 된다. 그러므로 useState함수의 형태로 넣어줘야한다.

그리고 (state) => state + 1을 입력하여 해결한다.


https://user-images.githubusercontent.com/103018984/174475704-d30ca652-6ed5-4983-b6a6-1edc0e605d4c.mov


# 실습 3번문제
 대망의 끝판왕 계산기 컴포넌트를 제작합니다!
 어떤 방법을 사용하셔도 괜찮습니다. 이번에는 통상적으로 알고있는 계산기로서의 기능이 다 들어가 있기만 하면 됩니다!! 디자인에 너무 부담가지지 않으셔도 좋습니다.<br>
  
  #먼저 계산기의 전체적인 디자인을 display: flex와 justify-content: center을 활용하여 만든다.
  
  그리고 이제 중요한 계산기의 기능을 구현한다.
  
  우선 가장 중요한 점은 계산기의 부호 연산 버튼을 누르면 지금까지 계산한 값이 표시가 되지 않도록 한다. 
  그리고 연산의 순서 역시 중요하다. 
  
  ```JavaScript
  const onClickOperators = (event) => {
    if (event.target.value === "@") {
      input = "";
      setValue("");
    } else {
      input = input + event.target.value;
      setValue("");
    }
  };
  ```
  #@버튼을 누르면 ''빈칸의 값이 표현되게 하는 if구문이 들어간 함수를 작성한다. 나머지 버튼을 누르게 된다면 지금까지의 연산값을
  더해준다.
  
  ```JavaScript
  const onClickEquals = () => {
    let number = "";
    let numbers = [];
    let operators = [];

    for (let i = 0; i < input.length; i++) {
      if (!isNaN(input[i])) {
        number = number + input[i];
      } else {
        numbers.push(number);
        number = "";
        operators.push(input[i]);
      }
    }
    numbers.push(number);
    number = "";
    ```
    
    #그 다음으로 숫자와 연산자의 값을 다르게 받아야 한다. numbers에 포함되는 숫자가 입력을 받게 된다면 숫자를 push하고
    연산자 버튼이 눌러지게 된다면 i번째의 연산자의 기능이 push된다. 이 모든 것을 onClickEquals 함수로 구현한다.
    
    ```JavaScript
    let count = operators.length;
    let operator = "";
    let result;
    for (let i = 0; i < count; i++) {
      operator = operators.shift();
      if (operator === "/") {
        result = Number(numbers.shift()) / Number(numbers.shift());
      } else if (operator === "x") {
        result = Number(numbers.shift()) * Number(numbers.shift());
      } else if (operator === "-") {
        result = Number(numbers.shift()) - Number(numbers.shift());
      } else if (operator === "+") {
        result = Number(numbers.shift()) + Number(numbers.shift());
      }
      numbers.unshift(result);
    }
    setValue(Number(numbers[0]));
  };
  ```
  #다음으로는 실제로 우리가 연산자 버튼을 눌렀을 때 어떠한 기능(사칙연산)을 구현할 것인가에 대한 함수를 설정하는 것이다.
  for 문을 활용하여 operators의 길이까지 값을 출력하는 것을 구현하는 것이다.
  number가 input이 된다면 number의 값만 출력하고, operator가 input된다면 그 함수의 기능을 출력하는 것이다.
  이것은 if / else로 구현한다. 여기서 shift는 배열의 맨 앞에 값을 제거하는 것이고 unshift는 배열의 맨 앞에 값을 추가한다.
  
  따라서 연산자 버튼을 눌렀을 때 값을 안보이게 할 수 있는 것이다.
  
  처음의 값은 0으로 초기화한 상태에서 시작한다.
  
  ```JavaScript
  &:hover {
    background-color: #E0FFFF;
    transition: 0.5s;
  ```
  
#참고로 커서를 가져다 댔을 때 색깔이 바뀌게 되는 것을 구현해보았는데 이거는 &hover로 간단하게 표현 가능하다.
background-color로 색을 지정하고 transition을 이용해 색이 은은하게 바뀔 것인지 설정할 수 있다. 나는 0.5s로
설정하였다.

#밑에는 최종본 영상이다.


https://user-images.githubusercontent.com/103018984/174476442-3af63ed3-0a8a-4e57-8857-9e01f7748f1d.mov





