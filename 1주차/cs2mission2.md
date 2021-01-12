# 쉘 스크립트 작성

- DATE라는 디렉토리에 <code>day1 ~ day16</code> 디렉토리를 만든다.
- 내가 마음대로 몇가지를 골라서 그 디렉토리 안에 <code>.cs</cdoe> 파일을 만든다.
- <code>condition</code>nano 쉘스크립트를 통해 <code>.cs</code> 확장자가 있으면 backup폴더에 만들어질 zip에 포함된다.
- 백업 알집에 날짜를 붙인다.

### day파일만들기

- for문으로 바로 만들었습니다.
- 처음에 local에 안만들어서 바로 다시 local에 만들어서 진행하였습니다.
- <code>for</code>문을 이용하여 디렉토리를 만들었습니다.
  <img src="https://i.ibb.co/bLDH9yb/day1-16.jpg">

### nano condition 쉘 스크립트

- <code>$(date +%Y&m%d)</code>를 통해 날짜를 입력받았습니다.
- arr이라는 빈 배열을 만들어주고 거기에 <code>.cs</code>라는 확장자를 가진 파일들을 저장하였습니다.
- else의 경우 empty 출력
  <img src="https://i.ibb.co/JBMJbk5/nano-codition.jpg">

### BACKUP\_.zip 확인하기

- VMware를 실행시킨 후 <code>/leehangeul/backup</code>에 zip이 있는지 확인한 결과 확장자 <code>.cs</code>를 가지고 있는 파일들만 backup된것을 볼 수 있다.
  <img src="https://i.ibb.co/L5xbCSn/backupzip.jpg">
