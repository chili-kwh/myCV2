require(["jquery", "nav"], function($){
    $(function(){
        $("#send-btn").on("click", function(){
            var $username = $('#username'),
                $email = $('#email'),
                $phone = $('#phone'),
                $message = $('#message'),
                $blogId = $('#blog-id'),
                $commentCount = $(".blog-commented span");

            $.post("cv/add_comment", {

                username: $username.val(),
                email: $email.val(),
                phone: $phone.val(),
                message: $message.val(),
                blogId: $blogId.val()

            }, function(data){
                if(data == "success"){
                    var now = new Date();
                    var html = `
                        <li class="comment">
                            <ul class="comment-info clearfix">
                                <li class="comment-user"><i class="iconfont ">&#xe60a;</i>`+ $username.val() +`</li>
                                <li class="comment-date"><i class="iconfont ">&#xe630;</i>`+ now.toLocaleDateString() +`</li>
                            </ul>
                            <p class="comment-content">`+ $message.val() +`</p>
                        </li>
                    `;
                    $(".comment-list").prepend(html);
                    $commentCount.text(parseInt($commentCount.text())+1);


                    alert("success!!");
                }else{
                    alert("fail???");

                }

            }, "text");






        });





    });
});