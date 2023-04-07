class EmployeesController < ApplicationController
before_action :current_employee, only: [:show, :edit, :update, :destroy]

  def index
    @employees = Employee.all
  end

  def new
    @employee = Employee.new
  end

  def create
    employee = Employee.create(employee_params)

    redirect_to employee_path(employee)
  end

  def show
  
  end

  def edit
   
  end

  def update
   
    @employee.update(employee_params)

    redirect_to employee_path(@employee)
  end

  def destroy
    
    @employee.destroy

    redirect_to employees_path
  end
  private

  def employee_params
    params.require(:employee).permit(:phone, :email, :user_id, :address_id)
  end

  def current_employee
    @employee = Employee.find(params[:id])
  end
end
