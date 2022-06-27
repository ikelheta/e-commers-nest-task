import { UserService } from './user.service';
import { Body, Controller, Get, Param, Post, Delete, Put } from '@nestjs/common';
import { UserClass } from './dto/user.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}
    @Post('add')
    addUser(@Body() data: UserClass){
        return this.userService.addUser(data)
    }
    @Get('find/:id')
    getUser(@Param('id') id: string){
        return this.userService.getOne(Number(id))
    }
    @Delete(':id')
    delete(@Param('id') id:string){
        return this.userService.deleteOne(Number(id))
    }
    @Put(":id")
    update(@Param('id') id: string ,  @Body() data:any){
        return this.userService.updateOne(Number(id), data)
    }
    @Get('find/all')
    getAll(){
        return this.userService.getAll()
    }

}
