<?php

class LoginController extends BaseController
{

    // http://localhost:8081/Login/select
    public function select() 
    {

        //validation, other process, db, reply
        $params                  = [];
        $params['sql']           = "SELECT hex(randomblob(16)) AS token, t2.LoginToken, t1.* 
            FROM User  t1 
        left join Login t2 on t1.UserId = t2.UserId
        Where UserName='".$_GET['UserName']."' and Password='".$_GET['Password']."'
        ";
        $reply                   = $this->getAll2($params);
        
        // login fail
        if ( count($reply['data']) == 0 ) 
        {

            echo json_encode($reply);
        }
        else
        {

            //login success but need to create token 
            if ( $reply['data'][0]['LoginToken'] == null )
            {
                $this->jsonBody = ["LoginToken"=>$reply['data'][0]['token'],"UserId"=>$reply['data'][0]['UserId'], "TokenExpireTime" => time(),"LastLoginTime" => time() + 86400 ];
                $this->create(false) ;

                $params                  = [];
                $params['sql']           = "SELECT hex(randomblob(16)) AS token, t2.LoginToken, t1.* 
                    FROM User  t1 
                left join Login t2 on t1.UserId = t2.UserId
                Where UserName='".$_GET['UserName']."' and Password='".$_GET['Password']."'
                ";
                $reply                   = $this->getAll2($params);

            }
            //$reply['data'][0] = [];
            $arr = [
             'token'     =>$reply['data'][0]['LoginToken']
            ,"UserName"  =>$reply['data'][0]['UserName']
            ,"Password"  =>$reply['data'][0]['Password']
            ,"Email"     =>$reply['data'][0]['Email']
            ,"CreatedAt" =>$reply['data'][0]['CreatedAt']
            ,"LastLogin" => null

            ];
            $reply['data'][0] = $arr; 
            echo json_encode($reply);
        }
            
    }


    // no route
    public function exist($token) 
    {
        //validation, other process, db, reply
        $params                  = [];
        $params['sql']           = "SELECT t1.*  FROM Login  t1 Where LoginToken='".$token."' ";
        $reply                   = $this->getAll2($params);
        return  ( count($reply['data']) > 0 ) ;
    }

    // http://localhost:8081/Login/create
    public function create($show) 
    {
        //validation, other process, db, reply
        $params                  = [];
        //$params['sql']           = $this->getInsertSql();
        $params['sql']           = 'INSERT INTO Login (LoginToken,UserId,TokenExpireTime,LastLoginTime)
                VALUES (:LoginToken,:UserId,:TokenExpireTime,:LastLoginTime)';



        $params['jsonBodyArray'] = [$this->jsonBody];
        $reply                   = $this->addRange($params);
        if ($show) echo json_encode($reply);
    }

}