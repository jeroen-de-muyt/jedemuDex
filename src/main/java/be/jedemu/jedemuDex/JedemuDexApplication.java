package be.jedemu.jedemuDex;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "be.jedemu.jedemuDex")
public class JedemuDexApplication {
	public static void main(String[] args) {
		SpringApplication.run(JedemuDexApplication.class, args);
	}
}