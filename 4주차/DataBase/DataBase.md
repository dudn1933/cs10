# DataBase

> input 과 output (C R U D)

- inpout : Create Update Delete
- output : Read
- MySQL = Relational DBMS 관계형 데이터 베이스 이다.
- 데이터베이스 = 폴더를 그룹핑 한것 = 스키마
- 그룹핑된 폴더가 보관되는곳 = 데이터베이스 서버

<br></br>

> 보안

- 데이터베이스는 자체적인 보안능력이 있다.
- 권한으로 인한 보안이 가능하다.

```
우분투에서 가상머신으로 MySQL을 실행할 경우
root 패스워드가 임의로 설정된다. 이것을 해결하는 방법을 알지 못해 여러방면으로 고생하고 있었는데 리사수가 도움을 주었다.

패스워드 해결 방법 참고
https://velog.io/@michael00987/MYSQL-%EB%B9%844%EB%B0%80%EB%B2%88%ED%98%B8-%ED%99%95%EC%9D%B8-%EB%B0%8F-%EB%B3%80%EA%B2%BD
```

<br></br>
<br></br>

# MySQL

> docker에서 mysql:5.7 download

```
docker pull mysql:5.7
```

> 컨테이너 생성 및 실행

```
docker run -d -p 3346:3306 -e MYSQL_ROOT_PASSWORD=비밀이지롱 --name hangeul_mysql mysql:5.7 --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci
```

> MySQL 컨테이너 bash 접속

```
docker exec -it hangeul_mysql bash
```

bash 쉘에 접속하여 배경지식에 있는 UTF8 셋팅을 해주었다.

> mysql 접속

```
mysql -u root -u
```

후에 password 를 작성해야하는데 우분투에서 다운받고 실행했을 경우 password를 새롭게 지정해 줘야한다.

> DATABASE 생성

```
CREATE DATABASE [파일명]
```

이렇게 하면 DATABASE가 생성되고 SHOW DATABASES; 를 통해 생성된 DATABASE를 확인할 수 있다.

> TABLE 생성

```
CREATE TABLE 테이블명(
    id INT(11) NOT NULL AUTO_INCREMENT,
    nickname varchar(64) NOT NULL,
    money dec(10, 2) NOT NULL,
    last_visit datetime NOT NULL,
    PRIMARY KEY(id);
)
```

- id는 AUTO_INCREMENT 로 1씩 증가하는 id로 만들고 PRIMARY KEY로 인하여 중복되지 않는 id가 생성된다.
- NOT NULL = 그 배열이 비면안된다는 것을 의미한다.

<img src="https://i.ibb.co/1bPsJfD/5-PRIMARY.jpg">
<br></br>

> person TABLE에 DATA 추가 INSERT INTO

```
INSERT INTO
  person(nickname)
VALUES
  ('ample'),('achieve'),('concentration'),('enfix'),('owl'),('attachment'),('hypothesize'),('catch'),('gene'),('scheme'),('start'),('manufacture'),('hunter'),('separation'),('possibility'),('revenge'),('volume'),('analyst'),('lonely'),('condition'),('design'),('night'),('secretion'),('reference'),('crusade'),('quality'),('jump'),('weapon'),('pit'),('aquarium'),('stroll'),('hierarchy'),('layout'),('bathtub'),('exact'),('teenager'),('button'),('translate'),('suburb'),('fun'),('plastic'),('analysis'),('note'),('deer'),('scan'),('know'),('snatch'),('relinquish'),('cook'),('ground'),('guide'),('annual'),('Venus'),('qualify'),('aunt'),('slab'),('line'),('benefit'),('global'),('grounds'),('belly'),('progress'),('flawed'),('oil'),('video'),('strict'),('horizon'),('map'),('pluck'),('thin'),('parameter'),('electronics'),('betray'),('ankle'),('drama'),('director'),('appetite'),('earthwax'),('mind'),('exclude'),('parade'),('crystal'),('quotation'),('vegetable'),('clerk'),('finance'),('traffic'),('literacy'),('sun'),('adventure'),('musical'),('car'),('recover'),('decrease'),('conflict'),('moral'),('fish'),('Raccoon'),('Autumn'),('Rano')
```

<br></br>

> 100만개의 DATA를 추가

```
DELIMITER $$
    CREATE PROCEDURE make()
    BEGIN
    DECLARE i INT DEFAULT 0;
        WHILE i < 1000000 DO
        INSERT INTO PCroom(nickname, money, last_visit)
        VALUES(
            (
                SELECT
                    nickname
                FROM
                    person
                order by
                    rand() * 100
                limit
                    1
                ), (rand() *(100000 -1) + 1), (
                FROM_UNIXTIME(
                    UNIX_TIMESTAMP('2021-01-01 00:00:01') + FLOOR(RAND() * 2592000)
                )
            )
        );
        SET i = i + 1;
        END WHILE;
    END $$
DELIMITER;
call make();
```

<br></br>

<img src="https://i.ibb.co/tmWkCrH/6-DATA.jpg">
<img src="https://i.ibb.co/8N4G6jt/7-100.jpg">

<br></br>

> VSCODE 에서의 MySQL 발견!!!

<img src="https://i.ibb.co/vvsmrYk/VSCODE.jpg">

매일같이 사용하는 VSCODE에서 MySQL을 사용해서 DATABASE를 다룰 수 있어서 재미잇게 다시한번 해볼 수 있었다.
