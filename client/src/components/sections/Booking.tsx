import { useState } from "react";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import { insertBookingSchema } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { format } from "date-fns";

const services = [
  { id: "private", name: "Private Lessons" },
  { id: "online", name: "Online Classes" },
  { id: "group", name: "Group Classes" },
  { id: "development", name: "Artist Development" }
];

export function Booking() {
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState<string>("");
  
  const { data: availableSlots, isLoading: slotsLoading } = useQuery({
    queryKey: ["/api/booking/available-slots"],
  });

  const form = useForm({
    resolver: zodResolver(insertBookingSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      startTime: "",
      endTime: "",
      notes: ""
    }
  });

  const mutation = useMutation({
    mutationFn: async (data: any) => {
      await apiRequest("POST", "/api/booking", data);
    },
    onSuccess: () => {
      toast({
        title: "Booking Confirmed!",
        description: "Check your email for the calendar invitation."
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to create booking. Please try again.",
        variant: "destructive"
      });
    }
  });

  const onSubmit = form.handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Book Your Session
          </h2>
          <p className="text-xl text-gray-600">
            Choose your preferred time and service
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <Input
                  placeholder="Your Name"
                  {...form.register("name")}
                />
                {form.formState.errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  {...form.register("email")}
                />
                {form.formState.errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <Input
                type="tel"
                placeholder="Phone Number"
                {...form.register("phone")}
              />
              {form.formState.errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.phone.message}
                </p>
              )}
            </div>

            <div>
              <Select onValueChange={(value) => form.setValue("serviceType", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service.id} value={service.id}>
                      {service.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {form.formState.errors.serviceType && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.serviceType.message}
                </p>
              )}
            </div>

            <div>
              <Select 
                onValueChange={(slot) => {
                  const [start, end] = slot.split("|");
                  form.setValue("startTime", start);
                  form.setValue("endTime", end);
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Time Slot" />
                </SelectTrigger>
                <SelectContent>
                  {slotsLoading ? (
                    <SelectItem value="loading">Loading available slots...</SelectItem>
                  ) : (
                    availableSlots?.map((slot: any, index: number) => (
                      <SelectItem 
                        key={index} 
                        value={`${slot.startTime}|${slot.endTime}`}
                      >
                        {format(new Date(slot.startTime), "MMM d, h:mm a")}
                      </SelectItem>
                    ))
                  )}
                </SelectContent>
              </Select>
              {(form.formState.errors.startTime || form.formState.errors.endTime) && (
                <p className="text-red-500 text-sm mt-1">
                  Please select a time slot
                </p>
              )}
            </div>

            <div>
              <Textarea
                placeholder="Additional Notes"
                className="h-32"
                {...form.register("notes")}
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? "Booking..." : "Book Now"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
