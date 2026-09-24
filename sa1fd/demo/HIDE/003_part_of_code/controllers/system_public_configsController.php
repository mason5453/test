<?php

class system_public_configsController extends BaseController
{

    // http://localhost:8081/system_public_configs/select
    public function select() 
    {
        //validation, other process, db, reply
        $params                  = [];
        $params['sql']           = $this->getSelectSql();
        //$params['jsonBodyArray'] = [$this->jsonBody];
        $reply                   = $this->getAll($params);
        echo json_encode($reply);
    }
    // http://localhost:8081/system_public_configs/create
    public function create() 
    {
        //validation, other process, db, reply
        $params                  = [];
        $params['sql']           = $this->getInsertSql();
        $params['jsonBodyArray'] = [$this->jsonBody];
        $reply                   = $this->addRange($params);
        echo json_encode($reply);
    }
    // http://localhost:8081/system_public_configs/update/:id
    public function update() 
    {
        //validation, other process, db, reply
        $params                  = [];
        $params['sql']           = $this->getUpdateSql();
        
        $params['jsonBodyArray'] = [$this->jsonBody];
        $id                      = $this->routeParams['id'];

        $reply                   = $this->update1($params,$id);
        echo json_encode($reply);
    }

}