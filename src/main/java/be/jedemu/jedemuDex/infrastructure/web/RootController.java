package be.jedemu.jedemuDex.infrastructure.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RootController {

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/list")
    public String list() {
        return "list";
    }

}